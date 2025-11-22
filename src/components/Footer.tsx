import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Teal CTA Section */}
      <section className="bg-gradient-to-b from-teal-400 to-teal-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to start your healthy journey?
          </h2>
          <p className="text-white text-lg md:text-xl mb-10 opacity-95">
            Join 500+ residents in Hyderabad who trust Kohinoor Elite Living.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full text-gray-800 text-lg flex-1 outline-none focus:ring-4 focus:ring-white/30"
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="bg-gray-950 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand & Legal */}
            <div>
              <h1 className="text-2xl font-bold text-teal-400 mb-4">
                KOHINOOR ELITE LIVING
              </h1>
              <p className="text-sm leading-relaxed mb-6">
                Empowering gated communities with premium nutrition, wellness resources, and farm-fresh deliveries.
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-xs leading-tight">
                <span className="text-gray-500">REGISTERED ENTITY NAME:</span>
                <br />
                <span className="text-teal-400 font-medium">
                  SHRI LAKSHMI KOHINOOR ENTERPRISES PRIVATE LIMITED
                </span>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <p>
                    G1, Crystal Classic Apts,
                    <br />
                    Veera Reddy Nagar, I.E. Nacharam,
                    <br />
                    Hyderabad, Telangana, 500076
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <a href="tel:+918179337052" className="hover:text-teal-400 transition-colors">
                    +91 81793 37052
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <a href="mailto:service@kohinoorelite.com" className="hover:text-teal-400 transition-colors">
                    service@kohinoorelite.com
                  </a>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Policies</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-teal-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/refund" className="hover:text-teal-400 transition-colors">
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="hover:text-teal-400 transition-colors">
                    Shipping & Delivery Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-gray-500 text-center md:text-left">
              © 2025 Shri Lakshmi Kohinoor Enterprises Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/kohinoor-elite-living/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;