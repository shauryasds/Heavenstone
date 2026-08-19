import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { submitContact } from '../services/api.js';

export const Contact = ({ prefilledProperty, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: prefilledProperty ? `Inquiry for ${prefilledProperty.title}` : 'Buy',
    message: prefilledProperty ? `Hi, I am interested in learning more about ${prefilledProperty.title} (${prefilledProperty.priceDisplay}) located in ${prefilledProperty.location}. Please share complete details.` : '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your property requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      onShowToast({ type: 'error', message: 'Please correct the highlighted fields before submitting.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitContact(formData);
      if (response && response.success) {
        onShowToast({
          type: 'success',
          message: response.message || 'Thank you! Your enquiry has been received. Our specialist will contact you shortly.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          requirement: 'Buy',
          message: '',
        });
        setErrors({});
      } else {
        onShowToast({
          type: 'error',
          message: response?.message || 'Unable to submit enquiry. Please try again.',
        });
      }
    } catch (err) {
      onShowToast({
        type: 'error',
        message: 'Network error. Please check your internet connection.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-haven-gold text-xs font-bold uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            Connect With Havenstone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-haven-navy tracking-tight">
            Get in <span className="text-gold-shimmer italic">Touch</span>
          </h2>
          <p className="text-slate-600 text-base font-light">
            Have a property requirement or want to schedule a private viewing? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Google Map */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Info Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <a
                href="mailto:hello@havenstonerealty.com"
                className="flex items-start gap-4 p-5 rounded-2xl bg-haven-bg border border-slate-200 hover:border-haven-gold transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-metallic text-haven-navy flex items-center justify-center shrink-0 shadow-gold-glow group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Email Direct</h4>
                  <p className="text-base font-bold text-haven-navy group-hover:text-haven-gold transition-colors">
                    hello@havenstonerealty.com
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 dedicated client desk</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+919876543210"
                className="flex items-start gap-4 p-5 rounded-2xl bg-haven-bg border border-slate-200 hover:border-haven-gold transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-metallic text-haven-navy flex items-center justify-center shrink-0 shadow-gold-glow group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Call Us Direct</h4>
                  <p className="text-base font-bold text-haven-navy group-hover:text-haven-gold transition-colors">
                    +91 98765 43210
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Mon – Sat: 9:30 AM – 7:30 PM IST</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-haven-bg border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-gold-metallic text-haven-navy flex items-center justify-center shrink-0 shadow-gold-glow">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Corporate HQ</h4>
                  <p className="text-base font-bold text-haven-navy">
                    New Delhi, India
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Vasant Kunj & Golf Course Rd Suites</p>
                </div>
              </div>

            </div>

            {/* Google Map Container with Header Trim */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative bg-slate-100">
              <div className="bg-haven-navy text-white px-4 py-2.5 flex items-center justify-between text-xs font-semibold border-b border-haven-gold/30">
                <span className="flex items-center gap-1.5 text-haven-gold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Delhi NCR Headquarters</span>
                </span>
                <span className="text-[10px] text-slate-300 font-mono">28.5275° N, 77.0688° E</span>
              </div>

              <div className="h-60">
                <iframe
                  title="Havenstone Realty Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.06889754725782!3d28.527582006176323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-haven-bg rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <h3 className="font-heading font-bold text-2xl text-haven-navy">
                  Send an Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below and a Havenstone specialist will respond within 2 hours.
                </p>
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Vikramaditya Sharma"
                  className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-haven-navy placeholder-slate-400 focus:outline-none transition-all ${
                    errors.name
                      ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-300'
                      : 'border-slate-200 bg-white focus:ring-2 focus:ring-haven-gold/60'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-haven-navy placeholder-slate-400 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-300'
                        : 'border-slate-200 bg-white focus:ring-2 focus:ring-haven-gold/60'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-haven-navy placeholder-slate-400 focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-300'
                        : 'border-slate-200 bg-white focus:ring-2 focus:ring-haven-gold/60'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Requirement Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Primary Requirement
                </label>
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm text-haven-navy font-semibold focus:outline-none focus:ring-2 focus:ring-haven-gold/60 cursor-pointer"
                >
                  <option value="Buy">Looking to Buy Luxury Property</option>
                  <option value="Rent">Looking to Rent High-end Property</option>
                  <option value="Commercial">Commercial Office / Retail Lease</option>
                  <option value="Consultation">Investment Portfolio Advisory</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Message / Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention preferred locations (Gurgaon, Noida, South Delhi), budget, BHK size, or specific questions..."
                  className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-haven-navy placeholder-slate-400 focus:outline-none transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-300'
                      : 'border-slate-200 bg-white focus:ring-2 focus:ring-haven-gold/60'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-haven-navy hover:bg-slate-800 text-white font-extrabold py-4 rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed border border-haven-gold/40 uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-haven-gold" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-haven-gold" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
