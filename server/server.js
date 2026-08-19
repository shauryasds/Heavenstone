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

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Havenstone Realty API',
    databaseConnected: getIsConnected()
  });
});

// Auto seed function for MongoDB
const seedDatabaseIfEmpty = async () => {
  if (!getIsConnected()) return;
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
  } catch (err) {
    console.error('[Seeder Error]:', err.message);
  }
};

// Start Server
const startServer = async () => {
  await connectDB();
  await seedDatabaseIfEmpty();

  app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`🏰 Havenstone Realty Server running on port ${PORT}`);
    console.log(`🔗 API Base: http://localhost:${PORT}/api`);
    console.log(`==========================================`);
  });
};

startServer();
