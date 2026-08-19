import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const connString =
    process.env.MONGODB_URI ||
    'mongodb://127.0.0.1:27017/havenstone_realty';

  console.log('[MongoDB] URI being used:', connString);

  try {
    const conn = await mongoose.connect(connString, {
      serverSelectionTimeoutMS: 3000,
    });

    isConnected = true;
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return true;

  } catch (error) {
    isConnected = false;

    console.error('[MongoDB] CONNECTION FAILED');
    console.error('[MongoDB] URI attempted:', connString);
    console.error('[MongoDB] Error:', error?.message);

    return false;
  }
};

export const getIsConnected = () => isConnected;
