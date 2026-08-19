import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Award, Building2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-haven-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Havenstone Realty Architecture"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-haven-navy/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Metric Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-haven-navy text-white p-6 rounded-3xl shadow-2xl border-2 border-haven-gold/40 max-w-xs hidden sm:block backdrop-blur-xl">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-gold-metallic text-haven-navy flex items-center justify-center shrink-0 shadow-gold-glow">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-haven-gold">Top Realty Firm</h4>
                  <p className="text-xs text-slate-300">Awarded NCR Luxury Partner 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <span className="text-haven-gold text-xs font-bold uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Our Vision & Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-haven-navy leading-[1.15] tracking-tight">
              A better way to find your <span className="text-gold-shimmer italic">next property.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-light">
              Havenstone Realty helps individuals, families and businesses find properties that match their needs, lifestyle and investment goals. Our approach combines local market knowledge, carefully selected properties and personalized support to make property decisions simpler.
            </p>

            {/* Key Pillars Checklist */}
            <div className="space-y-3 pt-2">
              {[
                'Strict 100-point physical & legal title audit on every listing',
                'Senior portfolio advisor assigned to every client engagement',
                'Transparent pricing with zero hidden commission markup',
                'Seamless bank financing & RERA title document registration'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-haven-gold shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <h4 className="font-heading font-extrabold text-2xl text-haven-navy">₹500Cr+</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Assets Advised</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <h4 className="font-heading font-extrabold text-2xl text-haven-navy">99.4%</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Satisfaction</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <h4 className="font-heading font-extrabold text-2xl text-haven-navy">15+ Yrs</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">NCR Legacy</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
