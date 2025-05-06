import numpy as np
from keras.models import load_model
from app.utils.extract_features import extract_features

model = load_model("app/models/best_model_3B.keras")

def predict_audio(file_path: str):
    features = extract_features(file_path)
    features = np.expand_dims(features, axis=0)  # (1, N)
    prediction = model.predict(features)
    predicted_class = np.argmax(prediction, axis=1)[0]
    confidence = float(np.max(prediction))
    return { "class": int(predicted_class), "confidence": round(confidence, 4) }
