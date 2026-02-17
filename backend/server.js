import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import leadsRouter from './src/routes/leads.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();

// Connect to MongoDB (with connection caching for serverless)
let cachedDb = null;
const connectToDatabase = async () => {
  if (cachedDb) {
    return cachedDb;
  }
  cachedDb = await connectDB();
  return cachedDb;
};

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Connect to DB before handling requests
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    console.error('Database connection error:', error);
    next(error);
  }
});

// Routes
app.use('/api/leads', leadsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use(errorHandler);

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless
export default app;
