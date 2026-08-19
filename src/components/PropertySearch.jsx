import React, { useState } from 'react';
import { Search, MapPin, Home, RefreshCw, SlidersHorizontal, Sparkles } from 'lucide-react';

export const PropertySearch = ({ onSearch, currentFilters }) => {
  const [location, setLocation] = useState(currentFilters.location || 'All');
  const [type, setType] = useState(currentFilters.type || 'All');
  const [purpose, setPurpose] = useState(currentFilters.purpose || 'All');
  const [search, setSearch] = useState(currentFilters.search || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, type, purpose, search });
  };

  const handleReset = () => {
    setLocation('All');
    setType('All');
    setPurpose('All');
    setSearch('');
    onSearch({ location: 'All', type: 'All', purpose: 'All', search: '' });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 -mt-20 sm:-mt-28 lg:-mt-32">
      <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-10 shadow-[0_30px_70px_rgba(15,23,42,0.2)] border-2 border-haven-gold/40 relative overflow-hidden">
        
        {/* Top Metallic Subtle Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Header Row: Purpose Segmented Control & Keyword Input */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-5 border-b border-slate-100">
            
            {/* Purpose Selector */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl w-full md:w-auto shadow-inner">
              {['All', 'Buy', 'Rent'].map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPurpose(p)}
                  className={`flex-1 md:flex-initial px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    purpose === p
                      ? 'bg-haven-navy text-haven-gold shadow-md scale-105'
                      : 'text-slate-600 hover:text-haven-navy hover:bg-slate-200/60'
                  }`}
                >
                  {p === 'All' ? 'All Purpose' : `For ${p}`}
                </button>
              ))}
            </div>

            {/* Keyword Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-haven-gold absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by area, landmark, project name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-haven-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-haven-gold/60 focus:bg-white transition-all"
              />
            </div>

          </div>

          {/* Controls Row: Location Select, Property Type Select & Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            
            {/* Location Selector */}
            <div className="md:col-span-4 space-y-2 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-haven-gold" />
                <span>Select Location</span>
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-haven-navy focus:outline-none focus:ring-2 focus:ring-haven-gold/60 focus:bg-white transition-all cursor-pointer appearance-none"
                >
                  <option value="All">All Micro-Markets (Gurgaon, Noida, Delhi)</option>
                  <option value="Gurgaon">Gurgaon (Golf Course Rd / Cyber City)</option>
                  <option value="Noida">Noida (Expressway / Sector 150)</option>
                  <option value="Delhi">South Delhi (Vasant Kunj / Greater Kailash)</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Property Type Selector */}
            <div className="md:col-span-4 space-y-2 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Home className="w-4 h-4 text-haven-gold" />
                <span>Property Category</span>
              </label>
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-haven-navy focus:outline-none focus:ring-2 focus:ring-haven-gold/60 focus:bg-white transition-all cursor-pointer appearance-none"
                >
                  <option value="All">All Categories</option>
                  <option value="Apartment">Luxury High-Rise Apartment</option>
                  <option value="Villa">Independent Gated Villa</option>
                  <option value="Commercial">Commercial Office Space</option>
                  <option value="Penthouse">Duplex Penthouse</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-4 flex items-center gap-3 pt-2 md:pt-0">
              <button
                type="submit"
                className="flex-1 bg-gold-gradient hover:bg-gold-metallic text-haven-navy font-bold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Find Properties</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                title="Reset All Filters"
                className="p-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

          </div>

        </form>
      </div>
    </div>
  );
};
