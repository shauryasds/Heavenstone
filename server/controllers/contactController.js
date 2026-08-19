import Enquiry from '../models/Enquiry.js';
import { getIsConnected } from '../config/db.js';

// In-memory array for fallback when DB is disconnected
const localEnquiries = [];

// POST /api/contact
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, requirement, message, propertyId } = req.body;

    // Backend validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Please provide your full name.' });
    }
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }
    if (!phone || phone.trim().length < 8) {
      return res.status(400).json({ success: false, message: 'Please provide a valid contact phone number.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Please write a short message describing your requirement.' });
    }

    const enquiryData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      requirement: requirement || 'Buy',
      message: message.trim(),
      propertyId: propertyId || null,
      createdAt: new Date()
    };

    if (getIsConnected()) {
      const newEnquiry = await Enquiry.create(enquiryData);
      console.log(`[Enquiry Created in DB]: ${newEnquiry._id} - ${name} (${email})`);
      return res.status(201).json({
        success: true,
        message: 'Thank you for reaching out! Our Havenstone Realty specialist will contact you shortly.',
        data: newEnquiry
      });
    }

    // Fallback store
    localEnquiries.push(enquiryData);
    console.log(`[Enquiry Logged in Local Memory]: ${name} (${email}) - ${phone}`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you within 24 hours.',
      data: enquiryData,
      source: 'memory-log'
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({ success: false, message: 'Server error processing your request. Please try again.' });
  }
};
