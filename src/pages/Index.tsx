
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl text-gray-800 font-semibold mb-4">About us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We build healthier lifestyles and community-first wellness programs tailored for gated
              communities. Our solutions focus on preventative care, community engagement and easy-to-access
              health resources for residents.
            </p>
            <p className="text-sm text-gray-500">
              Legal name: <span className="font-medium text-gray-700">Shri Lakshmi Kohinoor Enterprises Private Limited</span>
            </p>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <ServicesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
