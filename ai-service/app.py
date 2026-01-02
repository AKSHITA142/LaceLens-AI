import os
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from database import SessionLocal
from models import Lace
from embeddings import generate_image_embedding

# -----------------------------------
# App setup
# -----------------------------------

app = FastAPI()

# Ensure uploads folder exists
os.makedirs("uploads", exist_ok=True)

# CORS (required for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------
# Upload Lace API
# -----------------------------------
print("🚀 app.py loaded")

@app.post("/api/lace/upload")
async def upload_lace(
    image: UploadFile = File(...),
    name: str = "Unnamed Lace"
):
    print("🔥 UPLOAD ENDPOINT HIT")
