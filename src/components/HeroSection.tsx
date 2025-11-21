import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-[#e6f7f5] min-h-[120vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 md:space-y-6 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] text-gray-800">
              <div className="mb-2 md:mb-3">Building a</div>
              <div className="text-teal-500 italic mb-2 md:mb-3">healthy lifestyle</div>
              <div>in gated communities!</div>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We deliver premium dry fruits, farm-fresh produce, and personalized nutrition plans directly to your doorstep in Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-6 rounded-full transition-colors duration-200 shadow-lg"
            >
              <Link to="/signup">Get Your Starter Kit</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8 py-6 rounded-full transition-colors duration-200"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
