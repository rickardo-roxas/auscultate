import multer from 'multer';

const storage = multer.memoryStorage(); // changed from diskStorage to memoryStorage

const fileFilter = (_req, file, cb) => {
  const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/x-wav'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only .wav or .mp3 files are allowed'), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter,
});

export default upload;
