import React from 'react';
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-haven-navy text-slate-300 pt-16 pb-8 border-t border-haven-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-haven-gold to-amber-200 flex items-center justify-center shadow-gold-glow">
                <Building2 className="w-6 h-6 text-haven-navy" />
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight flex items-center gap-1">
                Havenstone <span className="text-haven-gold font-normal italic">Realty</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Havenstone Realty is a modern boutique real-estate company helping customers discover premier residential and commercial properties across Delhi NCR.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-haven-gold hover:text-haven-navy text-slate-300 flex items-center justify-center transition-all border border-slate-700"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-haven-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'properties', label: 'Featured Properties' },
                { id: 'services', label: 'Our Services' },
                { id: 'about', label: 'About Havenstone' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-haven-gold transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Prime Locations */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-haven-gold">
              Prime Sectors
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Golf Course Road, GGN</li>
              <li>Cyber City, Gurgaon</li>
              <li>Noida Expressway</li>
              <li>Vasant Kunj, South Delhi</li>
              <li>Greater Noida West</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-haven-gold">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-haven-gold shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-haven-gold shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-haven-gold shrink-0" />
                <a href="mailto:hello@havenstonerealty.com" className="hover:text-white transition-colors">
                  hello@havenstonerealty.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>© 2026 Havenstone Realty. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#disclaimer" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">
              RERA Disclaimer
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
