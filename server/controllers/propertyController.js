import Property from '../models/Property.js';
import { seedProperties } from '../data/seedData.js';
import { getIsConnected } from '../config/db.js';

// GET /api/properties
export const getProperties = async (req, res) => {
  try {
    const { location, type, purpose, search, minPrice, maxPrice } = req.query;

    if (getIsConnected()) {
      let query = {};

      if (location && location !== 'All') {
        query.$or = [
          { location: { $regex: location, $options: 'i' } },
          { city: { $regex: location, $options: 'i' } }
        ];
      }

      if (type && type !== 'All') {
        query.type = { $regex: type, $options: 'i' };
      }

      if (purpose && purpose !== 'All') {
        query.purpose = purpose;
      }

      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ];
      }

      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
      }

      const properties = await Property.find(query).sort({ featured: -1, createdAt: -1 });
      return res.status(200).json({ success: true, count: properties.length, data: properties });
    }

    // Fallback in-memory filtering
    let filtered = [...seedProperties];

    if (location && location !== 'All') {
      const locLower = location.toLowerCase();
      filtered = filtered.filter(p => p.location.toLowerCase().includes(locLower) || p.city.toLowerCase().includes(locLower));
    }

    if (type && type !== 'All') {
      const typeLower = type.toLowerCase();
      filtered = filtered.filter(p => p.type.toLowerCase() === typeLower);
    }

    if (purpose && purpose !== 'All') {
      filtered = filtered.filter(p => p.purpose === purpose);
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q));
    }

    return res.status(200).json({ success: true, count: filtered.length, data: filtered, source: 'fallback-seed' });
  } catch (error) {
    console.error('Error in getProperties:', error);
    return res.status(500).json({ success: false, message: 'Server error retrieving properties' });
  }
};

// GET /api/properties/:id
export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      const property = await Property.findById(id);
      if (property) {
        return res.status(200).json({ success: true, data: property });
      }
    }

    const item = seedProperties.find(p => p.id === id || p._id === id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Property listing not found' });
    }

    return res.status(200).json({ success: true, data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error retrieving property detail' });
  }
};
