from app.models.model_loader import model
import numpy as np

def predict_disease(mfcc, chroma):
    # Preprocess inputs
    mfcc = np.array(mfcc).reshape(1, 40, 679, 1)
    chroma = np.array(chroma).reshape(1, 12, 259, 1)

    # Dummy example for merging - customize for your model
    features = [mfcc, chroma]

    prediction = model.predict(features)
    predicted_class = int(np.argmax(prediction))
    return {"class": predicted_class, "confidence": float(np.max(prediction))}