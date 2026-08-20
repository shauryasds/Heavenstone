import mongoose from 'mongoose';

export const connectDB = async () => {
  // 1 = connected, 2 = connecting
  if (mongoose.connection.readyState >= 1) {
    return true;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('[MongoDB] MONGODB_URI environment variable is missing!');
    return false;
  }

  try {
    console.log('[MongoDB] Connecting to database...');
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of default 30s
    });
    console.log('[MongoDB] Connected successfully');
    return true;
  } catch (error) {
    console.error('[MongoDB] Connection Failed:', error?.message || error);
    return false;
  }
};

export const getIsConnected = () => mongoose.connection.readyState === 1;
