import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize2, ArrowUpRight, SearchX, Sparkles, Heart, ShieldCheck, Check } from 'lucide-react';

export const FeaturedProperties = ({ properties, isLoading, onSelectProperty, onResetFilters }) => {
  const [favorites, setFavorites] = useState({});
  const [activeTab, setActiveTab] = useState('All');

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ['All', 'Apartment', 'Villa', 'Commercial', 'Penthouse'];

  const filteredList = properties.filter((p) => {
    if (activeTab === 'All') return true;
    return p.type === activeTab;
  });

  return (
    <section id="properties" className="py-24 bg-haven-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-haven-gold text-xs font-extrabold uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Luxury Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-haven-navy tracking-tight">
              Featured <span className="text-gold-shimmer italic">Properties</span>
            </h2>
            <p className="text-slate-600 text-base font-light">
              Handpicked luxury residences, private gated villas, and Grade-A commercial hubs across Gurgaon, Noida, and South Delhi.
            </p>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-2xl shadow-sm border border-slate-200 text-xs font-semibold text-slate-700 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Title Audited & RERA Registered</span>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-haven-navy text-haven-gold shadow-lg shadow-haven-navy/20 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-haven-navy border border-slate-200/80'
              }`}
            >
              {cat === 'All' ? 'All Residences' : cat}
            </button>
          ))}
        </div>

        {/* Loading Skeletons */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 animate-pulse">
                <div className="h-64 bg-slate-200" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-slate-200 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 rounded w-1/2" />
                  <div className="h-10 bg-slate-100 rounded-2xl" />
                  <div className="h-12 bg-slate-200 rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredList.length === 0 ? (
          /* Empty Search State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto shadow-xl border border-slate-200/80 my-8 space-y-5"
          >
            <div className="w-20 h-20 bg-amber-50 text-haven-gold rounded-full flex items-center justify-center mx-auto shadow-inner">
              <SearchX className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-haven-navy">
              No Properties Found
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Sorry, no properties match your search criteria in this category. Try adjusting your location or purpose filters.
            </p>
            <button
              onClick={onResetFilters}
              className="bg-gold-gradient hover:bg-gold-metallic text-haven-navy font-bold px-6 py-3 rounded-2xl text-xs uppercase tracking-wider shadow-gold-glow"
            >
              Reset All Filters
            </button>
          </motion.div>
        ) : (
          /* Luxury Property Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredList.map((property, index) => {
              const isFav = favorites[property.id || property._id];
              return (
                <motion.div
                  key={property.id || property._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-luxury hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)] border border-slate-200/80 transition-all duration-300 flex flex-col group cursor-pointer"
                  onClick={() => onSelectProperty(property)}
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
                    
                    {/* Top Badges & Heart Toggle */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="bg-haven-navy/90 backdrop-blur-md text-haven-gold font-bold text-xs px-3.5 py-1.5 rounded-full border border-haven-gold/40 shadow-md uppercase tracking-wider">
                        {property.type}
                      </span>

                      <button
                        onClick={(e) => toggleFavorite(e, property.id || property._id)}
                        className="w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-md hover:bg-white text-white hover:text-red-500 flex items-center justify-center transition-all shadow-md"
                        aria-label="Wishlist Property"
                      >
                        <Heart className={`w-4 h-4 transition-colors ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                    </div>

                    {/* Price Banner Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="bg-gold-gradient text-haven-navy font-heading font-extrabold text-2xl px-4 py-1.5 rounded-2xl shadow-gold-glow">
                        {property.priceDisplay}
                      </div>
                      <span className="text-white text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700">
                        {property.purpose === 'Rent' ? 'For Rent' : 'For Sale'}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-xl text-haven-navy group-hover:text-haven-gold transition-colors line-clamp-1">
                        {property.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-haven-gold shrink-0" />
                        <span className="line-clamp-1">{property.location || property.address}</span>
                      </div>
                    </div>

                    {/* Specs Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-slate-700 text-xs">
                      {property.bedrooms > 0 ? (
                        <div className="flex items-center gap-1.5 justify-center bg-slate-50 py-2 rounded-xl border border-slate-100">
                          <Bed className="w-4 h-4 text-haven-navy" />
                          <span className="font-bold text-haven-navy">{property.bedrooms} BHK</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 justify-center bg-slate-50 py-2 rounded-xl border border-slate-100">
                          <span className="font-bold text-haven-navy">Commercial</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 justify-center bg-slate-50 py-2 rounded-xl border border-slate-100">
                        <Bath className="w-4 h-4 text-haven-navy" />
                        <span className="font-bold text-haven-navy">{property.bathrooms} Baths</span>
                      </div>

                      <div className="flex items-center gap-1.5 justify-center bg-slate-50 py-2 rounded-xl border border-slate-100">
                        <Maximize2 className="w-3.5 h-3.5 text-haven-navy" />
                        <span className="font-bold text-haven-navy">{property.areaSqFt} sq.ft</span>
                      </div>
                    </div>

                    {/* View Button */}
                    <button
                      type="button"
                      onClick={() => onSelectProperty(property)}
                      className="w-full bg-slate-900 group-hover:bg-gold-gradient group-hover:text-haven-navy text-white font-bold py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md group-hover:shadow-gold-glow"
                    >
                      <span>View Listing Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
