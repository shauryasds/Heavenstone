import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { PropertySearch } from './components/PropertySearch.jsx';
import { FeaturedProperties } from './components/FeaturedProperties.jsx';
import { PropertyModal } from './components/PropertyModal.jsx';
import { Services } from './components/Services.jsx';
import { WhyChooseUs } from './components/WhyChooseUs.jsx';
import { About } from './components/About.jsx';
import { CTA } from './components/CTA.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { WhatsAppButton } from './components/WhatsAppButton.jsx';
import { Toast } from './components/Toast.jsx';
import { fetchProperties } from './services/api.js';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [properties, setProperties] = useState([]);
  const [isLoadingProperties, setIsLoadingProperties] = useState(true);
  const [filters, setFilters] = useState({ location: 'All', type: 'All', purpose: 'All', search: '' });
  
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [prefilledInquiryProperty, setPrefilledInquiryProperty] = useState(null);
  const [toast, setToast] = useState(null);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'properties', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch properties whenever filters update
  useEffect(() => {
    let isMounted = true;
    setIsLoadingProperties(true);

    fetchProperties(filters).then((res) => {
      if (isMounted) {
        if (res && res.data) {
          setProperties(res.data);
        }
        setIsLoadingProperties(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [filters]);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (newFilters) => {
    setFilters(newFilters);
    // Smooth scroll down to properties section to see results
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setFilters({ location: 'All', type: 'All', purpose: 'All', search: '' });
  };

  const handleEnquireFromModal = (property) => {
    setPrefilledInquiryProperty(property);
    handleNavigate('contact');
  };

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-haven-bg text-haven-navy font-sans relative selection:bg-haven-gold selection:text-white">
      
      {/* Toast Alert Popup */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Glassmorphism Search Panel */}
        <PropertySearch onSearch={handleSearchSubmit} currentFilters={filters} />

        {/* Featured Properties Grid */}
        <FeaturedProperties
          properties={properties}
          isLoading={isLoadingProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onResetFilters={handleResetFilters}
        />

        {/* Property Detail Modal */}
        {selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
            onEnquire={handleEnquireFromModal}
          />
        )}

        {/* Services Section */}
        <Services onNavigate={handleNavigate} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* About Us Section */}
        <About />

        {/* Call to Action Banner */}
        <CTA onNavigate={handleNavigate} />

        {/* Contact Section with Google Maps */}
        <Contact prefilledProperty={prefilledInquiryProperty} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton />

    </div>
  );
}
