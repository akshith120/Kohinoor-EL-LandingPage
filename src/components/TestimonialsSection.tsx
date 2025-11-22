import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The quality of the walnuts in the starter kit was amazing. Much better than what I get at the supermarket.",
      author: "Priya R., Nacharam",
      rating: 5
    },
    {
      text: "I love the weekly fruit box. It saves me a trip to the market and the fruits are always fresh.",
      author: "Suresh K., Uppal",
      rating: 5
    },
    {
      text: "The nutrition plan really helped me understand my diet better. Highly recommended.",
      author: "Anjali M., Secunderabad",
      rating: 4.5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < Math.floor(rating)) {
            // Full star
            return <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />;
          }
          if (i === Math.floor(rating) && rating % 1 !== 0) {
            // Half star (using background gradient)
            return (
              <div key={i} className="relative">
                <Star className="w-5 h-5 text-gray-300" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            );
          }
          // Empty star
          return <Star key={i} className="w-5 h-5 text-gray-300" />;
        })}
      </div>
    );
  };

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-teal-600 mb-4">
            For many, being <span className="italic">healthy</span> is already real and easy!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-teal-100/50 p-8 rounded-lg">
              {/* Original teal box – unchanged */}
              <div className="w-16 h-16 bg-teal-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-teal-300 rounded"></div>
              </div>

              {/* Stars – first two: 5 stars, third: 4.5 stars */}
              <div className="mb-6">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-teal-700 mb-6 text-lg leading-relaxed">
                “{testimonial.text}”
              </p>
              <p className="text-teal-600 font-medium">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;