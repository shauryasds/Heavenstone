import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  requirement: { type: String, required: true }, // Buy, Rent, Consultation, Commercial
  message: { type: String, required: true },
  propertyId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
