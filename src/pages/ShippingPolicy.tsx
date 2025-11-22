import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
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
            Shipping & Delivery Policy
          </h1>
          <p className="text-center text-gray-600 font-medium mb-2">
            Shri Lakshmi Kohinoor Enterprises Private Limited
          </p>
          <p className="text-center text-gray-600 text-sm mb-10">
            Last Updated: November 20, 2025
          </p>

          <div className="prose max-w-none text-gray-800 leading-relaxed space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-8">
                1 Shipping Locations
              </h2>
              <p>
                Shri Lakshmi Kohinoor Enterprises Private Limited currently ships exclusively to addresses within <strong>Hyderabad, Telangana</strong>. We utilize reliable local delivery partners to ensure your products reach you safely and freshly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-8">
                2 Processing Time
              </h2>
              <ul className="list-disc ml-8 space-y-3 text-gray-700">
                <li>Orders are typically processed within <strong>1–2 business days</strong> (excluding Sundays and Public Holidays).</li>
                <li>Orders for fresh fruits may have specific dispatch schedules to ensure freshness.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-8">
                3 Delivery Timeline
              </h2>
              <ul className="list-disc ml-8 space-y-2 text-gray-700">
                <li><strong>Standard Delivery:</strong> Delivered within <strong>1–2 working days</strong> across Hyderabad.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-8">
                4 Shipping Charges
              </h2>
              <ul className="list-disc ml-8 space-y-3 text-gray-700">
                <li>Shipping charges are calculated based on the weight of the order and the delivery location within Hyderabad.</li>
                <li>The final shipping cost will be displayed at the checkout page before you proceed to payment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-8">
                5 Tracking
              </h2>
              <p>
                Once your order is dispatched, you will receive a tracking number via <strong>email/SMS</strong> to track the status of your shipment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2a4d69] mb-4 mt-8">
                6 Contact Us
              </h2>
              <p className="mb-4">
                If you have any issues with your delivery, please contact our logistics support at:
              </p>
              <div className="space-y-3 text-gray-700 font-medium">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:service@kohinoorelite.com" className="text-[#2a4d69] underline">
                    service@kohinoorelite.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> 81793 37052
                </p>
              </div>
            </section>

          </div>


        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;