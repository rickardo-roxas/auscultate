// Libraries
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Middlewares
import corsOptions from "./configs/cors.config.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import logger from "./middlewares/logger.middleware.js";

// Environment Variables
import config from './configs/index.config.js';

// Routes
import homeRoutes from "./routes/home.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import predictRoutes from "./routes/predict.routes.js";

// Environment Variables
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public",)));
app.use(logger);

// Routes
app.use("/api", homeRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/predict", predictRoutes);

// Error Handling
app.use((_req, res, _next) => {
    res.status(404).json({ error: "Not Found" });
});
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT} in ${config.NODE_ENV} mode`);
});

export default app;