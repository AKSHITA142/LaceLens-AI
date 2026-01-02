import { pool } from "../db/index.js";

export async function insertLace({
  category,
  imageUrl,
  embedding,
}) {
  const query = `
    INSERT INTO laces (category, image_url, embedding)
    VALUES ($1, $2, $3)
    RETURNING id;
  `;

  const values = [category, imageUrl, embedding];

  const { rows } = await pool.query(query, values);
  return rows[0];
}
