import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTA = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-haven-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-haven-navy rounded-3xl p-8 sm:p-14 md:p-16 text-center relative overflow-hidden shadow-2xl border-2 border-haven-gold/40"
        >
          {/* Background Mesh Pattern & Glowing Orbs */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-haven-gold/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-haven-gold/15 border border-haven-gold/40 text-haven-gold text-xs font-bold uppercase tracking-widest shadow-gold-glow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Your Property Journey Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Ready to find your <span className="text-gold-shimmer italic">next property?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Tell us what you're looking for and our senior advisory team will help you find the right opportunity.
            </p>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gold-gradient hover:bg-gold-metallic text-haven-navy font-extrabold px-9 py-4.5 rounded-2xl text-sm transition-all duration-300 inline-flex items-center gap-3 shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)] uppercase tracking-wider"
              >
                <span>Get in Touch Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
