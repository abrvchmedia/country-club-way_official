import mongoose from 'mongoose';

let cachedConnection = null;

export const connectDB = async () => {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    console.log('Using existing MongoDB connection');
    return cachedConnection;
  }

  try {
    mongoose.set('strictQuery', true);
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: true,
      serverSelectionTimeoutMS: 5000,
    });
    
    cachedConnection = conn;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    throw error;
  }
};
