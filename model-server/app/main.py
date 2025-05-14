import os
from fastapi import FastAPI
from app.routers.predict import router as predict_router
from app.configs.config import config

app = FastAPI(title="Lung Disease Classification API")

app.include_router(predict_router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Model server running", "model_path": config.MODEL_PATH}