import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-[#2a4d69] mb-2 text-center">
            Terms & Conditions
          </h1>
          <p className="text-center text-gray-600 font-medium mb-2">
            Shri Lakshmi Kohinoor Enterprises Private Limited
          </p>
          <p className="text-center text-gray-600 text-sm mb-10">
            Last Updated: November 20, 2025
          </p>

          <div className="prose max-w-none text-gray-800 leading-relaxed">

            <h2 className="text-2xl font-bold text-[#2a4d69] mb-4">
              Welcome to Kohinoor Elite Living
            </h2>
            <p className="mb-6">
              These Terms and Conditions outline the rules and regulations for the use of{" "}
              <strong>Shri Lakshmi Kohinoor Enterprises Private Limited’s</strong> website, located at{" "}
              <a href="https://kohinooreliteliving.com" className="text-[#2a4d69] underline">
                https://kohinooreliteliving.com
              </a>.
            </p>
            <p className="mb-8">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Kohinoor Elite Living if you do not agree to all of the terms and conditions stated on this page.
            </p>

            <h3 className="text-xl font-bold text-[#2a4d69] mb-3 mt-10">1 Terminology</h3>
            <p className="mb-6">
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 
              <strong> “Client”, “You” and “Your”</strong> refers to you, the person logged on this website and compliant to the Company’s terms and conditions. 
              <strong> “The Company”, “Ourselves”, “We”, “Our” and “Us”</strong>, refers to our Company,{" "}
              <strong>Shri Lakshmi Kohinoor Enterprises Private Limited</strong>.
            </p>

            <h3 className="text-xl font-bold text-[#2a4d69] mb-3 mt-10">2 Product Information</h3>
            <p className="mb-6">
              We strive to ensure that the details of our products (Dry Fruits, Nuts, Fresh Fruits, and Nutrition Plans) are accurate. However, given the natural origin of our products, slight variations in color, size, or texture may occur.
            </p>

            <h3 className="text-xl font-bold text-[#2a4d69] mb-3 mt-10">3 Ordering & Payment</h3>
            <ul className="list-disc ml-8 space-y-2 mb-6">
              <li>All orders are subject to acceptance and availability.</li>
              <li>Prices for our products are subject to change without notice.</li>
              <li>We reserve the right to refuse any order you place with us.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#2a4d69] mb-3 mt-10">4 Limitation of Liability</h3>
            <p className="mb-8">
              Shri Lakshmi Kohinoor Enterprises Private Limited shall not be held liable for any indirect, special, or consequential damages arising out of the use of this site or the purchase of products.
            </p>

            <h3 className="text-xl font-bold text-[#2a4d69] mb-3 mt-10">5 Governing Law</h3>
            <p className="mb-8">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in <strong>Hyderabad, Telangana</strong>.
            </p>

            <h3 className="text-xl font-bold text-[#2a4d69] mb-3 mt-10">6 Contact Information</h3>
            <p><strong>Shri Lakshmi Kohinoor Enterprises Private Limited</strong></p>
            <p className="mt-2">
              <strong>Address:</strong> G1, Crystal Classic Apts, Veera Reddy Nagar, I.E. Nacharam, Hyderabad, Telangana, 500076
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:service@kohinoorelite.com" className="text-[#2a4d69] underline">
                service@kohinoorelite.com
              </a>
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;