import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import { insertLace } from "../services/lace.service.js";

export async function uploadLace(req, res) {
  try {
    const { category } = req.body;
    const filePath = req.file.path;

    // 1️⃣ Send image to Python CLIP service
    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));

    const clipRes = await axios.post(
      "http://127.0.0.1:8001/embed-image",
      form,
      { headers: form.getHeaders() }
    );

    const embedding = clipRes.data.embedding;

    // 2️⃣ Store in DB
    const imageUrl = `/uploads/${req.file.filename}`;

    const lace = await insertLace({
      category,
      imageUrl,
      embedding,
    });

    res.json({
      success: true,
      laceId: lace.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
}
