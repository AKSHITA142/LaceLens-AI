import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImageEmbedding(imagePath) {
  const imageBuffer = fs.readFileSync(imagePath);

  const response = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: imageBuffer.toString("base64"),
  });

  return response.data[0].embedding;
}
