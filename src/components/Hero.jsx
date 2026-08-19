import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, ShieldCheck, MapPin, Sparkles, Star, ChevronDown } from 'lucide-react';

export const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-36 lg:pt-44 pb-32 lg:pb-40 overflow-hidden bg-haven-navy">
      
      {/* Background Image with Deep Luxury Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90"
          alt="Havenstone Luxury Real Estate"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-[0.80] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-haven-navy via-haven-navy/90 to-haven-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-haven-navy via-transparent to-haven-navy/70" />
        <div className="absolute top-1/3 right-12 w-[600px] h-[600px] bg-haven-gold/15 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Main Hero Copy Column — Spacious Layout */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/80 border border-haven-gold/40 backdrop-blur-xl text-haven-gold text-xs font-bold uppercase tracking-[0.2em] shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4 text-haven-gold" />
              <span>Delhi NCR’s Premier Luxury Realty House</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.12] tracking-tight"
            >
              Find a place you'll be <span className="text-gold-shimmer italic underline decoration-haven-gold/30 decoration-wavy underline-offset-[12px]">proud</span> to call home.
            </motion.h1>

            {/* Subheadline with Generous Spacing */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl text-slate-300 max-w-2xl font-light leading-[1.7] tracking-wide"
            >
              Discover thoughtfully selected luxury homes, high-rise apartments, private gated villas, and commercial spaces in locations that matter across <span className="text-white font-medium">Gurgaon</span>, <span className="text-white font-medium">Noida</span>, and <span className="text-white font-medium">South Delhi</span>.
            </motion.p>

            {/* CTA Buttons Row with Spacious Margins */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4"
            >
              <button
                onClick={() => onNavigate('properties')}
                className="bg-gold-gradient hover:bg-gold-metallic text-haven-navy font-extrabold px-9 py-5 rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_12px_35px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.6)] active:translate-y-0 uppercase tracking-widest"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 font-bold px-9 py-5 rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md hover:border-haven-gold/60 shadow-lg hover:-translate-y-0.5"
              >
                <span>Book Private Consultation</span>
              </button>
            </motion.div>

            {/* Press Trust Ticker Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-8 text-xs text-slate-400 font-semibold uppercase tracking-[0.2em]"
            >
              <span className="text-slate-500 font-bold">Featured In:</span>
              <span className="hover:text-haven-gold transition-colors cursor-default">Forbes Asia</span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
              <span className="hover:text-haven-gold transition-colors cursor-default">Architectural Digest</span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
              <span className="hover:text-haven-gold transition-colors cursor-default">Times Property</span>
            </motion.div>

          </div>

          {/* Floating Stats Showcase Column — Spacious Layout */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stat Card 1 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel-dark p-7 sm:p-8 rounded-[2rem] flex items-center gap-6 border border-haven-gold/40 shadow-2xl relative overflow-hidden group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-metallic flex items-center justify-center shrink-0 shadow-gold-glow group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8 text-haven-navy" />
                </div>
                <div className="text-left space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">50K+</h3>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                      Verified
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-medium">Happy Homeowners & Investors</p>
                </div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel-dark p-7 sm:p-8 rounded-[2rem] flex items-center gap-6 border border-haven-gold/40 shadow-2xl relative overflow-hidden group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-metallic flex items-center justify-center shrink-0 shadow-gold-glow group-hover:rotate-6 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-haven-navy" />
                </div>
                <div className="text-left space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">500+</h3>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 font-medium">Title-Audited Luxury Portfolio</p>
                </div>
              </motion.div>

              {/* Stat Card 3 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel-dark p-7 sm:p-8 rounded-[2rem] flex items-center gap-6 border border-haven-gold/40 shadow-2xl relative overflow-hidden group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-metallic flex items-center justify-center shrink-0 shadow-gold-glow group-hover:rotate-6 transition-transform">
                  <MapPin className="w-8 h-8 text-haven-navy" />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">25+</h3>
                  <p className="text-sm text-slate-300 font-medium">Prime NCR Micro-Markets</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Cue Indicator */}
      <div className="relative z-10 text-center pt-8 hidden lg:block">
        <a
          href="#properties"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-haven-gold transition-colors font-semibold"
        >
          <span>Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-haven-gold" />
        </a>
      </div>

    </section>
  );
};
