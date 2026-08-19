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
  }catch (error) {
    isConnected = false;

    console.error('========================================');
    console.error('[MongoDB] CONNECTION FAILED');
    console.error('========================================');

    console.error('[MongoDB] Error name:', error?.name);
    console.error('[MongoDB] Error message:', error?.message);
    console.error('[MongoDB] Error code:', error?.code);
    console.error('[MongoDB] Error codeName:', error?.codeName);

    if (error?.reason) {
      console.error('[MongoDB] Error reason:', error.reason);
    }

    console.error('[MongoDB] Full error:', error);
    console.error('[MongoDB] Stack:', error?.stack);

    console.error('========================================');

    return false;
  }
};

export const getIsConnected = () => isConnected;
