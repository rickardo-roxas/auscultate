from app.models.model_loader import model
import numpy as np

# Define the class index to label mapping
CLASS_LABELS = {
    0: "COPD",
    1: "Healthy",
    2: "URTI",
    3: "Bronchiectasis",
    4: "Pneumonia",
    5: "Bronchiolitis",
    6: "Asthma",
    7: "LRTI"
}

def predict_disease(mfcc, chroma):
    # Preprocess inputs
    mfcc = np.array(mfcc).reshape(1, 40, 679, 1)
    chroma = np.array(chroma).reshape(1, 12, 259, 1)

    # Combine features for the model
    features = [mfcc, chroma]

    prediction = model.predict(features)
    predicted_class = int(np.argmax(prediction))
    confidence = float(np.max(prediction))
    label = CLASS_LABELS.get(predicted_class, "Unknown")

    return {
        "class": predicted_class,
        "label": label,
        "confidence": confidence
    }
