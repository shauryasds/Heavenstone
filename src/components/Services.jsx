import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, TrendingUp, Home, Compass, ArrowRight } from 'lucide-react';

export const Services = ({ onNavigate }) => {
  const servicesList = [
    {
      num: '01',
      icon: Home,
      title: 'Property Buying',
      description: 'Discover curated residential and commercial properties that perfectly align with your lifestyle, location preferences, and investment budget.',
    },
    {
      num: '02',
      icon: TrendingUp,
      title: 'Property Selling',
      description: 'Maximize your property valuation through targeted premium marketing campaigns, qualified buyer matching, and end-to-end deal closure.',
    },
    {
      num: '03',
      icon: KeyRound,
      title: 'Property Rentals',
      description: 'Access verified rental agreements for high-end luxury residences, executive corporate leases, and prime commercial workspaces.',
    },
    {
      num: '04',
      icon: Compass,
      title: 'Property Consultation',
      description: 'Receive bespoke market insights, ROI projections, regulatory guidance, and strategic portfolio consultation from senior industry specialists.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-haven-gold text-xs font-bold uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            Bespoke Real Estate Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-haven-navy tracking-tight">
            Comprehensive <span className="text-gold-shimmer italic">Services</span>
          </h2>
          <p className="text-slate-600 text-base font-light">
            Whether securing your luxury home, selling a prime asset, or expanding an institutional portfolio, Havenstone Realty delivers tailored solutions.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-haven-bg rounded-3xl p-8 shadow-luxury hover:shadow-2xl border border-slate-200/80 hover:border-haven-gold transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
              >
                {/* Index Watermark */}
                <div className="absolute top-4 right-4 text-5xl font-heading font-extrabold text-haven-gold/15 group-hover:text-haven-gold/30 transition-colors pointer-events-none select-none">
                  {service.num}
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-haven-navy text-haven-gold flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-haven-navy transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-haven-navy group-hover:text-haven-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-8 relative z-10">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-haven-navy group-hover:text-haven-gold transition-colors"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-haven-gold" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
