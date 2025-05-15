# Auscultate

## Description
Auscultate is a web-based AI agent that classifies lung diseases based on lung sounds. The AI model is a dual-channel CNN-LSTM model where spatial and temporal features (MFCC and Chroma) are extracted from a given audio file containing the respiratory cycles. 

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Contact](#contact)
- [Other Links](#other-links)

## Features
- Modern and user-friendly UI
- File upload (.wav and .mp3)
- Lung sound feature extraction (MFCC & Chroma)
- Lung disease classification

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:

  - Node.js (v18+)
  - npm or Yarn
  - Docker
  - Git
  - MySQL
  - VS Code (optional, but recommended)
    
### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/rickardo-roxas/auscultate.git
cd auscultate
```

#### 2. Install Dependencies
```bash
cd client && npm install
cd ../server && npm install
```

#### 3. Setup
```bash
# Development build
docker compose -f docker-compose.dev.yml

# Production build
docker compose -f docker-compose.prod.yml up
```

### Usage

### Project Structure
```bash
speech-scape-cordillera/
│ auscultate
├── client/              # React + Vite frontend
├── server/              # Node + Express backend
├── model-server/        # FastAPI backend
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── README.md
```

### API Endpoints
Method | Endpoint | Description
GET | /api/ | Connect to the server and model server
POST | /api/upload | Upload file and invoke predictions

## Technology Stack
- **Server**: Node.js, Express.js
- **Model Server**: FastAPI, Tensorflow, Keras
- **Client**: React.js, Vite
- **Containerization**: Docker

## License
MIT License

Copyright (c) [2025] [The First Se7en]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
**Developers**
- DE TORRES, John Rey
- JASMIN, Ramon Emmiel
- LACANILAO, Marvin Patrick
- RILLERA, Hans
- ROXAS, Johan Rickardo
- SICCUAN, Sebastian
- TANK, Rithik

## Acknowledgments
- ICBHI 2017
- Doctors of Baguio City (unnamed for data privacy)

## Other Links

### Google Drive
This Google Drive contains the different versions of the datasets, models (with their respective results and evaluation metrics), and the different Google Colab files.
https://drive.google.com/drive/folders/18w_lnOJYH6tF_6An0uNC98COr2K1IdM-?usp=drive_link

### Agent Repository
https://github.com/rickardo-roxas/auscultate.git
https://github.com/rickardo-roxas/auscultate
