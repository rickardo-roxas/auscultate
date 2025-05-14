import os
from dotenv import load_dotenv

# Load environment from the .env.dev file
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env.dev'))

HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", 8000))
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
LOG_LEVEL = os.getenv("LOG_LEVEL", "info")
MODEL_PATH = os.getenv("MODEL_PATH")

if not MODEL_PATH or not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"MODEL_PATH is invalid or missing: {MODEL_PATH}")
