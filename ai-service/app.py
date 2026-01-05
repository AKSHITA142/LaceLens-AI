import os
import uuid
from fastapi import FastAPI, UploadFile, File, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text


from database import SessionLocal
from models import Lace
from embeddings import generate_image_embedding

from fastapi.staticfiles import StaticFiles




# App setup

app = FastAPI()

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("🚀 app.py loaded")


# UPLOAD LACE


@app.post("/api/lace/upload")
async def upload_lace(
    image: UploadFile = File(...),
    name: str = "Unnamed Lace"
):
    db = SessionLocal()

    try:
        filename = f"{uuid.uuid4().hex}_{image.filename}"
        file_path = os.path.join(UPLOAD_DIR, filename)

        # Save image
        with open(file_path, "wb") as f:
            f.write(await image.read())

        print(f"✅ Image saved at: {file_path}")


        # Generate embedding
        embedding = generate_image_embedding(file_path)
        print(f"🧠 Embedding generated, length: {len(embedding)}")
        
        # 3️⃣ DUPLICATE CHECK (visual)
        duplicate = db.execute(
            text("""
                SELECT
                    l.id,
                    l.name,
                    l.image_path,
                    e.embedding <-> (:embedding)::vector AS distance
                FROM lace_embeddings e
                JOIN laces l ON l.id = e.lace_id
                ORDER BY distance
                LIMIT 1
            """),
            {"embedding": embedding}
        ).fetchone()

        # Very strict threshold → visually identical
        if duplicate and duplicate.distance < 0.03:
            print("🛑 DUPLICATE LACE DETECTED")

            if os.path.exists(file_path):
                os.remove(file_path)

            return {
                "message": "Duplicate lace detected",
                "existing_lace_id": duplicate.id,
                "existing_image_path": duplicate.image_path,
                "distance": float(duplicate.distance),
                "similarity_percent": 100.0
            }

        # 4️⃣ Insert lace
        lace = Lace(name=name, image_path=file_path)
        db.add(lace)
        db.commit()
        db.refresh(lace)

        print(f"✅ Lace inserted with ID: {lace.id}")

        # Insert embedding
        db.execute(
            text("""
                INSERT INTO lace_embeddings (lace_id, embedding, model)
                VALUES (:lace_id, (:embedding)::vector, :model)
            """),
            {
                "lace_id": lace.id,
                "embedding": embedding,
                "model": "CLIP-ViT-B/32"
            }
        )

        db.commit()

        return {
            "message": "Lace uploaded + embedding saved",
            "lace_id": lace.id
        }

    except Exception as e:
        db.rollback()
        print("❌ UPLOAD FAILED:", e)
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        db.close()


# SEARCH LACE (EXACT + SIMILAR)

@app.post("/api/lace/search")
async def search_lace(
    image: UploadFile = File(...),
    top_k: int = Query(5, ge=1, le=20)
):
    db = SessionLocal()
    query_path = None

    try:
        print("🔍 SEARCH ENDPOINT HIT")

        # Save query image temporarily
        query_filename = f"query_{uuid.uuid4().hex}.jpg"
        query_path = os.path.join(UPLOAD_DIR, query_filename)

        with open(query_path, "wb") as f:
            f.write(await image.read())

        print(f"📸 Query image saved: {query_path}")

        # Generate query embedding
        query_embedding = generate_image_embedding(query_path)
        print(f"🧠 Query embedding length: {len(query_embedding)}")

        results = []
        exact_lace_id = None

        
        # 1️⃣ EXACT MATCH (TOP-1 NEAREST)
        

        exact_match = db.execute(
            text("""
                SELECT
                    l.id,
                    l.name,
                    l.image_path,
                    e.embedding <-> (:query_embedding)::vector AS distance
                FROM lace_embeddings e
                JOIN laces l ON l.id = e.lace_id
                ORDER BY distance
                LIMIT 1
            """),
            {"query_embedding": query_embedding}
        ).fetchone()

        if exact_match and exact_match.distance < 0.05:
            exact_lace_id = exact_match.id

            results.append({
                "lace_id": exact_match.id,
                "name": exact_match.name,
                "image_path": exact_match.image_path,
                "distance": float(exact_match.distance),
                "similarity_percent": 100.0
            })

            print("🎯 EXACT MATCH FOUND")

        
        # 2️⃣ SIMILAR LACES
        

        remaining = top_k - len(results)

        if remaining > 0:
            similar_rows = db.execute(
                text("""
                    SELECT
                        l.id,
                        l.name,
                        l.image_path,
                        e.embedding <-> (:query_embedding)::vector AS distance
                    FROM lace_embeddings e
                    JOIN laces l ON l.id = e.lace_id
                    WHERE (:exact_id IS NULL OR l.id != :exact_id)
                    ORDER BY distance
                    LIMIT :limit
                """),
                {
                    "query_embedding": query_embedding,
                    "exact_id": exact_lace_id,
                    "limit": remaining
                }
            ).fetchall()

            for row in similar_rows:
                similarity = max(
                    0.0,
                    round((1 / (1 + float(row.distance))) * 100, 2)
                )

                results.append({
                    "lace_id": row.id,
                    "name": row.name,
                    "image_path": row.image_path,
                    "distance": float(row.distance),
                    "similarity_percent": similarity
                })

        return results

    except Exception as e:
        print("❌ SEARCH FAILED:", e)
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        db.close()
        if query_path and os.path.exists(query_path):
            os.remove(query_path)
