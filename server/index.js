import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, getIsConnected } from './config/db.js';
import apiRoutes from './routes/api.js';
import Property from './models/Property.js';
import { seedProperties } from './data/seedData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Flexible CORS configuration supporting main domain, Vercel preview URLs, & local dev
const configuredOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map(url => url.trim())
  : [];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or Postman)
    if (!origin) return callback(null, true);

    // Allow explicitly configured origins or wildcard
    if (configuredOrigins.includes(origin) || configuredOrigins.includes('*')) {
      return callback(null, true);
    }

    // Allow all Vercel deployment domains (*.vercel.app)
    if (origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }

    // Allow local development URLs
    if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
      return callback(null, true);
    }

    callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Database connection middleware for Serverless environment (Vercel)
app.use(async (req, res, next) => {
  const connected = await connectDB();
  if (connected) {
    await seedDatabaseIfEmpty();
  }
  next();
});

// API Routes
app.use('/api', apiRoutes);
app.use('/', apiRoutes); // Direct root handling for Vercel rewrites if needed

// Health Check Endpoint
app.get('/health', async (req, res) => {
  const connected = await connectDB();
  res.status(200).json({
    status: 'online',
    service: 'Havenstone Realty API',
    databaseConnected: connected
  });
});

let isSeeded = false;
// Auto seed function for MongoDB
const seedDatabaseIfEmpty = async () => {
  if (isSeeded || !getIsConnected()) return;
  try {
    const count = await Property.countDocuments();
    if (count === 0) {
      console.log('[Seeder] Populating database with sample luxury properties...');
      const formatted = seedProperties.map(p => ({
        title: p.title,
        subtitle: p.subtitle,
        type: p.type,
        location: p.location,
        city: p.city,
        address: p.address,
        purpose: p.purpose,
        price: p.price,
        priceDisplay: p.priceDisplay,
        bedrooms: p.bedrooms,
        bathrooms: p.bathrooms,
        areaSqFt: p.areaSqFt,
        image: p.image,
        gallery: p.gallery,
        featured: p.featured,
        badge: p.badge,
        description: p.description,
        amenities: p.amenities
      }));
      await Property.insertMany(formatted);
      console.log('[Seeder] Successfully seeded database.');
    }
    isSeeded = true;
  } catch (err) {
    console.error('[Seeder Error]:', err.message);
  }
};

// Initialize DB and Seeder on startup
connectDB().then(() => seedDatabaseIfEmpty());

// Start server if executed directly
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`🏰 Havenstone Realty Server running on port ${PORT}`);
    console.log(`🔗 API Base: http://localhost:${PORT}/api`);
    console.log(`==========================================`);
  });
}

export default app;
