import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Gift, Leaf, Apple, Check } from 'lucide-react';

const ShopCollection = () => {
  return (
    <section id="shopProducts" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Store
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Shop Our Collection
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Premium nuts, fresh fruits, and wellness kits.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Elite Wellness Starter Kit */}
          <Card className="relative bg-white rounded-3xl border-2 border-teal-200 overflow-hidden shadow-lg flex flex-col h-full">
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </Badge>
            </div>

            {/* Large Grey Image Area */}
            <div className="bg-teal-100 h-56 md:h-64 flex items-center justify-center">
              <Gift className="w-24 h-24 md:w-28 md:h-28 text-teal-600" />
            </div>

            {/* Compact Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 text-center leading-tight">
                Elite Wellness Starter Kit
                <span className="block text-2xl text-teal-600 mt-1">₹2,500</span>
              </h3>
              <p className="text-xs text-gray-500 text-center mt-1">For New Members</p>

              <ul className="mt-5 space-y-2.5 text-left text-gray-700 text-sm flex-1">
                {[
                  'Premium Dry Fruit Hamper (1kg)',
                  'Seasonal Fresh Fruit Basket',
                  'Diet Consultation Plan',
                  'Community Access Pass',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4.5 h-4.5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full py-6 text-base">
                Add to Cart
              </Button>
            </div>
          </Card>

          {/* Card 2 - Premium California Almonds */}
          <Card className="bg-white rounded-3xl border border-gray-200 shadow-lg flex flex-col h-full">
            <div className="bg-gray-100 h-56 md:h-64 flex items-center justify-center">
              <Leaf className="w-24 h-24 md:w-28 md:h-28 text-gray-600" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 text-center leading-tight">
                Premium California Almonds (500g)
                <span className="block text-2xl text-teal-600 mt-1">₹650</span>
              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed text-center flex-1">
                Crunchy, nutritious, and perfect for daily snacking. 100% Natural & Preservative Free.
              </p>

              <Button
                variant="outline"
                className="mt-auto w-full border-teal-600 text-teal-600 hover:bg-teal-50 font-medium rounded-full py-6 text-base"
              >
                Add to Cart
              </Button>
            </div>
          </Card>

          {/* Card 3 - Seasonal Immunity Fruit Box */}
          <Card className="bg-white rounded-3xl border border-gray-200 shadow-lg flex flex-col h-full">
            <div className="bg-gray-100 h-56 md:h-64 flex items-center justify-center">
              <Apple className="w-24 h-24 md:w-28 md:h-28 text-gray-600" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 text-center leading-tight">
                Seasonal Immunity Fruit Box
                <span className="block text-2xl text-teal-600 mt-1">₹800</span>
              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed text-center flex-1">
                Weekly subscription box containing 4-5 varieties of seasonal farm-fresh fruits.
              </p>

              <Button
                variant="outline"
                className="mt-auto w-full border-teal-600 text-teal-600 hover:bg-teal-50 font-medium rounded-full py-6 text-base"
              >
                Add to Cart
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;