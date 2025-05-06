import config from './index.config.js';

const corsOptions = {
    origin: config.CORS_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
};

export default corsOptions;