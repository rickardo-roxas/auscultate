from fastapi import FastAPI
from app.routes import predict_routes

app = FastAPI(
    title="Model Server",
    description="A server hosting the dual-channel CNN-LSTM model for lung disease classification.",
    version="1.0",
)

app.include_router(predict_routes.router, prefix="/predict", tags=["Prediction"])