import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Eye, Headset, CheckCircle } from 'lucide-react';

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Verified Properties',
      subtitle: '100% Title Checked',
      description: 'Every property in our collection undergoes rigorous 100-point legal title verification and physical audits before listing.',
    },
    {
      icon: Award,
      title: 'Local Market Expertise',
      subtitle: '15+ Years NCR Legacy',
      description: 'In-depth market knowledge across Golf Course Road, Cyber City, Noida Expressway, and South Delhi prime luxury sectors.',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      subtitle: 'Zero Hidden Markup',
      description: 'Clear documentation, complete fee transparency, and honest advisory throughout your entire property acquisition journey.',
    },
    {
      icon: Headset,
      title: 'Dedicated Concierge',
      subtitle: 'Single Point of Contact',
      description: 'Personalized assistance from initial shortlisting to legal registration, bank loans, and key handover.',
    },
  ];

  return (
    <section className="py-24 bg-haven-navy text-white relative overflow-hidden">
      
      {/* Background Decorative Mesh Pattern & Glowing Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-haven-gold/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-haven-gold text-xs font-bold uppercase tracking-widest bg-haven-gold/15 border border-haven-gold/40 px-4 py-1.5 rounded-full shadow-gold-glow">
            The Havenstone Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Why Discerning Clients <span className="text-gold-shimmer italic">Choose Us</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Built on trust, legal rigor, and deep regional partnerships across the National Capital Region.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel-dark rounded-3xl p-8 border border-haven-gold/30 shadow-2xl relative overflow-hidden group text-left"
              >
                <div className="space-y-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold-metallic text-haven-navy flex items-center justify-center shadow-gold-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-haven-navy" />
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-haven-gold transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-haven-gold block mt-1">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
