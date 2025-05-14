import os
from tensorflow.keras.models import load_model

MODEL_PATH = os.getenv("MODEL_PATH")

if not MODEL_PATH or not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"MODEL_PATH is invalid or missing: {MODEL_PATH}")

model = load_model(MODEL_PATH)