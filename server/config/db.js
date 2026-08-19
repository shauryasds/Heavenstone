import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const connString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/havenstone_realty';
  try {
    const conn = await mongoose.connect(connString, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB] Connection skipped/failed (${error.message}). Operating with in-memory seed data mode.`);
    isConnected = false;
    return false;
  }
};

export const getIsConnected = () => isConnected;
