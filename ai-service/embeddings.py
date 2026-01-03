import torch
import clip
from PIL import Image
import numpy as np

device = "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

def generate_image_embedding(image_path: str):
    image = preprocess(Image.open(image_path).convert("RGB")).unsqueeze(0).to(device)

    with torch.no_grad():
        embedding = model.encode_image(image)
        embedding = embedding / embedding.norm(dim=-1, keepdim=True)

    return embedding.cpu().numpy()[0].tolist()
