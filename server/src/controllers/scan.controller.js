import { pool } from "../db/index.js";
import { generateImageEmbedding } from "../services/embedding.service.js";

export async function scanLace(req, res) {
  try {
    const imagePath = req.file.path;

    const userEmbedding = await generateImageEmbedding(imagePath);

    const result = await pool.query(
      `
      SELECT image_url,
             1 - (embedding <=> $1) AS similarity
      FROM laces
      WHERE embedding IS NOT NULL
      ORDER BY embedding <=> $1
      LIMIT 6;
      `,
      [userEmbedding]
    );

    if (result.rows.length === 0) {
      return res.json({ matches: [], message: "No similar laces found" });
    }

    res.json({ matches: result.rows });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Scan failed" });
  }
}
