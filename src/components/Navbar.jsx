import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Menu, X, PhoneCall, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Navbar = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-haven-navy/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3 border-b border-haven-gold/30'
          : 'bg-gradient-to-b from-haven-navy/90 via-haven-navy/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Gold Crest */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gold-metallic flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-haven-navy" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-haven-navy flex items-center justify-center">
                <ShieldCheck className="w-2.5 h-2.5 text-white" />
              </div>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight flex items-center gap-1.5">
                Havenstone <span className="text-haven-gold font-normal italic">Realty</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-300 font-semibold font-sans flex items-center gap-1">
                <span>RERA Registered</span>
                <span className="w-1 h-1 bg-haven-gold rounded-full"></span>
                <span>NCR Luxury</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links Pill Container */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-5 py-2 rounded-full border border-haven-gold/20 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-haven-navy font-bold'
                      : 'text-slate-300 hover:text-haven-gold'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gold-gradient rounded-full shadow-gold-glow"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Direct Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-haven-gold transition-colors py-2 px-3.5 rounded-xl border border-slate-700/80 bg-slate-900/40 hover:border-haven-gold/40"
            >
              <PhoneCall className="w-3.5 h-3.5 text-haven-gold animate-pulse" />
              <span>+91 98765 43210</span>
            </a>

            <button
              onClick={() => handleLinkClick('properties')}
              className="relative group overflow-hidden bg-gold-gradient hover:bg-gold-metallic text-haven-navy font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-gold-glow hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Explore Properties</span>
                <Sparkles className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-800/90 text-slate-200 border border-haven-gold/30 focus:outline-none shadow-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-haven-gold" /> : <Menu className="w-6 h-6 text-haven-gold" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-haven-navy/98 backdrop-blur-2xl border-b border-haven-gold/40 px-4 pt-4 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-gold-gradient text-haven-navy shadow-gold-glow'
                        : 'text-slate-200 hover:bg-slate-800/80 hover:text-haven-gold'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-sm text-slate-200 py-3 rounded-xl border border-slate-700 bg-slate-900/80"
                >
                  <PhoneCall className="w-4 h-4 text-haven-gold" />
                  <span>+91 98765 43210</span>
                </a>
                <button
                  onClick={() => handleLinkClick('properties')}
                  className="w-full bg-gold-gradient text-haven-navy font-bold py-3.5 rounded-xl text-center shadow-gold-glow text-sm uppercase tracking-wider"
                >
                  Explore Properties
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
