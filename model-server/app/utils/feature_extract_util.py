import librosa
import numpy as np

def extract_features(file_path):
    try:
        y, sr = librosa.load(file_path, sr=None, mono=True)

        # MFCCs
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40)
        mfccs = np.mean(mfccs.T, axis=0)

        # Chroma
        stft = np.abs(librosa.stft(y))
        chroma = librosa.feature.chroma_stft(S=stft, sr=sr)
        chroma = np.mean(chroma.T, axis=0)

        # Mel Spectrogram
        mel = librosa.feature.melspectrogram(y=y, sr=sr)
        mel = np.mean(mel.T, axis=0)

        # Spectral Contrast
        contrast = librosa.feature.spectral_contrast(S=stft, sr=sr)
        contrast = np.mean(contrast.T, axis=0)

        # Tonnetz
        tonnetz = librosa.feature.tonnetz(y=librosa.effects.harmonic(y), sr=sr)
        tonnetz = np.mean(tonnetz.T, axis=0)

        return np.concatenate([mfccs, chroma, mel, contrast, tonnetz])
    except Exception as e:
        raise ValueError(f"Feature extraction failed: {str(e)}")
