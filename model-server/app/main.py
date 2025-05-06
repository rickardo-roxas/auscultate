import os
from dotenv import load_dotenv
from fastapi import FastAPI
import tensorflow as tf

# Load .env.dev
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env.dev'))

# Read config from env
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", 8000))
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
MODEL_PATH = os.getenv("MODEL_PATH")
LOG_LEVEL = os.getenv("LOG_LEVEL", "info")

# Load model
if not MODEL_PATH or not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"MODEL_PATH is invalid or missing: {MODEL_PATH}")

model = tf.keras.models.load_model(MODEL_PATH)

# Init FastAPI
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Model server running", "model_path": MODEL_PATH}