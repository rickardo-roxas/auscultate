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
│
├── client/              # React + Vite frontend
├── server/              # Node + Express backend
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── README.md
```

### API Endpoints

To define

## Technology Stack
- **Server**: Node.js, Express.js
- **Model Server**: FastAPI, Tensorflow, Keras
- **Client**: React.js, Vite
- **Containerization**: Docker

## License


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
This Google Drive contains the different versions of the datasets and models (with their respective results and evaluation metrics).
https://drive.google.com/drive/folders/18w_lnOJYH6tF_6An0uNC98COr2K1IdM-?usp=drive_link
