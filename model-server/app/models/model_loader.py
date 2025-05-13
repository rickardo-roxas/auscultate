from keras.models import load_model
from app.configs.config import MODEL_PATH

print(f"[INFO] Loading model from: {MODEL_PATH}")
model = load_model(MODEL_PATH)