import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  type: { type: String, required: true }, // Apartment, Villa, Commercial, Penthouse
  location: { type: String, required: true }, // e.g. Gurgaon, Noida, Delhi
  city: { type: String, required: true },
  address: { type: String },
  purpose: { type: String, enum: ['Buy', 'Rent'], default: 'Buy' },
  price: { type: Number, required: true }, // Numerical price in INR
  priceDisplay: { type: String, required: true }, // e.g. "₹1.25 Cr" or "₹78 Lakh"
  bedrooms: { type: Number, default: 0 },
  bathrooms: { type: Number, default: 0 },
  areaSqFt: { type: Number, required: true },
  image: { type: String, required: true },
  gallery: [{ type: String }],
  featured: { type: Boolean, default: true },
  badge: { type: String, default: 'Verified' },
  description: { type: String },
  amenities: [{ type: String }],
  agent: {
    name: { type: String, default: 'Havenstone Specialist' },
    phone: { type: String, default: '+91 98765 43210' },
    email: { type: String, default: 'hello@havenstonerealty.com' }
  }
}, { timestamps: true });

export default mongoose.models.Property || mongoose.model('Property', propertySchema);
