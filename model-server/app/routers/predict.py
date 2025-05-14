from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.feature_extractor import extract_features_from_upload
from app.models.inference import predict_disease
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/upload")
async def upload_audio(file: UploadFile = File(...)):
    try:
        checkpoints = [{"progress": 10, "status": "Upload Received"}]

        checkpoints.append({"progress": 30, "status": "Extracting features..."})
        mfcc, chroma = extract_features_from_upload(file)
        checkpoints.append({"progress": 50, "status": "Feature extraction complete"})

        checkpoints.append({"progress": 60, "status": "Running model inference..."})
        result = predict_disease(mfcc, chroma)
        checkpoints.append({"progress": 90, "status": "Inference complete", "result": result})

        checkpoints.append({"progress": 100, "status": "Finished"})

        return JSONResponse(content={"checkpoints": checkpoints})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
