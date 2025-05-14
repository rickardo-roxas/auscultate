import librosa
import numpy as np
import io
from fastapi import UploadFile

def extract_features_from_upload(file: UploadFile):
    audio_bytes = io.BytesIO(file.file.read())
    y, sr = librosa.load(audio_bytes, sr=22050)

    mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40)
    chroma = librosa.feature.chroma_stft(y=y, sr=sr)

    mfcc = mfcc[:, :679]
    chroma = chroma[:, :259]

    return mfcc.tolist(), chroma.tolist()