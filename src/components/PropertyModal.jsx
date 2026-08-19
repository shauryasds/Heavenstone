import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Bed, Bath, Maximize2, Check, Phone, Mail, Shield, Sparkles } from 'lucide-react';

export const PropertyModal = ({ property, onClose, onEnquire }) => {
  if (!property) return null;

  const [activeImage, setActiveImage] = useState(property.image);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-h-[85vh] overflow-y-auto">
            {/* Gallery Image Stage */}
            <div className="relative h-80 sm:h-96 bg-slate-900">
              <img
                src={activeImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="bg-haven-gold text-haven-navy font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block shadow-md">
                    {property.type} · {property.purpose}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    {property.title}
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-haven-gold shrink-0" />
                    <span>{property.address || property.location}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-haven-gold font-heading font-extrabold text-3xl">
                    {property.priceDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 p-4 bg-slate-100 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImage === img ? 'border-haven-gold scale-105 shadow-md' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Features Spec Grid */}
              <div className="grid grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1.5 text-haven-gold mb-1">
                    <Bed className="w-5 h-5 text-haven-navy" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Bedrooms</div>
                  <div className="text-base font-bold text-haven-navy">{property.bedrooms || 'N/A'} BHK</div>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1.5 text-haven-gold mb-1">
                    <Bath className="w-5 h-5 text-haven-navy" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Bathrooms</div>
                  <div className="text-base font-bold text-haven-navy">{property.bathrooms} Baths</div>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1.5 text-haven-gold mb-1">
                    <Maximize2 className="w-5 h-5 text-haven-navy" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Super Area</div>
                  <div className="text-base font-bold text-haven-navy">{property.areaSqFt} sq.ft</div>
                </div>
              </div>

              {/* Overview Description */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-haven-navy flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-haven-gold" />
                  <span>Property Overview</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {property.description || 'This exclusive Havenstone Realty listing features premium architectural finishes, smart space design, and seamless access to prime NCR business and transit corridors.'}
                </p>
              </div>

              {/* Key Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-xl text-haven-navy">
                    Key Amenities & Features
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {property.amenities.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                        <Check className="w-4 h-4 text-haven-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dedicated Agent Footer Strip */}
              <div className="bg-haven-navy p-6 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-haven-gold/30">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 rounded-full bg-haven-gold/20 flex items-center justify-center text-haven-gold font-bold font-heading text-lg">
                    HR
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Havenstone Realty Concierge</h4>
                    <p className="text-xs text-slate-300">Dedicated Listing Specialist</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onEnquire(property);
                  }}
                  className="w-full sm:w-auto bg-haven-gold hover:bg-haven-gold-hover text-haven-navy font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-gold-glow"
                >
                  Enquire About Property
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
