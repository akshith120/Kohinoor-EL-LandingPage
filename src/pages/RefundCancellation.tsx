import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
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
            Refund & Cancellation Policy
          </h1>
          <p className="text-center text-gray-600 font-medium mb-2">
            Shri Lakshmi Kohinoor Enterprises Private Limited
          </p>
          <p className="text-center text-gray-600 text-sm mb-10">
            Last Updated: November 20, 2025
          </p>

          <div className="prose max-w-none text-gray-800 leading-relaxed space-y-8">

            <section>
              <p className="mb-6">
                At Kohinoor Elite Living, we take pride in delivering premium quality dry fruits, nuts, and fresh produce. Due to the perishable nature of our products, we have a specific policy regarding refunds and cancellations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-10">
                1 Cancellation Policy
              </h2>
              <ul className="list-disc ml-8 space-y-3 text-gray-700">
                <li>
                  <strong>Before Shipment:</strong> You may cancel your order within <strong>2 hours</strong> of placing it, or before the order has been dispatched/shipped, whichever is earlier.
                </li>
                <li>
                  <strong>After Shipment:</strong> Once the order has been dispatched from our warehouse, it cannot be cancelled.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-10">
                2 Return Policy
              </h2>

              <h3 className="text-xl font-semibold text-[#2a4d69] mt-6 mb-3">
                • Perishable Goods (Fresh Fruits)
              </h3>
              <p className="mb-4">
                Due to health and hygiene reasons, we do not accept returns on fresh fruits unless the product was delivered in a damaged or spoiled condition.
              </p>

              <h3 className="text-xl font-semibold text-[#2a4d69] mt-6 mb-3">
                • Non-Perishable Goods (Dry Fruits/Nuts)
              </h3>
              <p className="mb-4">
                We do not accept returns for change of mind. Returns are only accepted if:
              </p>
              <ul className="list-disc ml-8 space-y-2 text-gray-700">
                <li>The package is physically damaged upon delivery.</li>
                <li>The product received is incorrect (wrong item delivered).</li>
                <li>The product is expired or spoiled upon opening.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-10">
                3 Refund Process
              </h2>
              <ul className="list-disc ml-8 space-y-4 text-gray-700">
                <li>
                  If you receive a damaged or incorrect item, please notify us within <strong>24 hours</strong> of delivery by emailing{" "}
                  <a href="mailto:service@kohinoorelite.com" className="text-[#2a4d69] underline font-medium">
                    service@kohinoorelite.com
                  </a>, or by Calling / WhatsApp at <strong>81793 37052</strong> with photos of the damaged product.
                </li>
                <li>
                  Upon verification, we will initiate a refund or a replacement.
                </li>
                <li>
                  <strong>Refund Timeline:</strong> Approved refunds will be processed within <strong>5–7 working days</strong>. The amount will be credited back to your original method of payment (Credit Card / Debit Card / UPI / Bank Account).
                </li>
              </ul>
            </section>

          </div>

         
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;