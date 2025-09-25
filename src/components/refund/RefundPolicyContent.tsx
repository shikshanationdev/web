"use client";
import React from "react";

const RefundPolicyContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-10 py-12">
      <div className="max-w-none">
        <p className="mb-8 text-gray-600">
          <strong>Effective Date:</strong> 24 September 2025
        </p>

        <section id="cancellation-policy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            1. Cancellation Policy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Once a course, test series, or subscription has been purchased, it cannot be cancelled under any circumstances.</li>
            <li>Students are advised to review all course details, content structure, and features before making a purchase decision.</li>
            <li>No partial or full cancellation requests will be entertained after successful enrollment.</li>
            <li>By enrolling, you acknowledge and agree that your purchase is final.</li>
          </ul>
        </section>

        <section id="eligibility" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            2. Eligibility for Refund
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Refunds are available only for purchases made directly through the Shiksha Nation App or website.</li>
            <li>Refund requests must be made within 7 days of the purchase date.</li>
            <li>Courses or test series where more than 20% of content is accessed are not eligible for a refund.</li>
          </ul>
        </section>

        <section id="non-refundable" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            3. Non-Refundable Situations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Digital goods fully consumed or downloaded.</li>
            <li>Subscription plans after the trial period has ended.</li>
            <li>Violation of our Terms of Use.</li>
          </ul>
        </section>

        <section id="how-to-request" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            4. How to Request a Refund
          </h2>
          <p className="mb-4 text-gray-700">
            To initiate a refund, please email our support team at <a href="mailto:support@shikshanation.com" className="text-sky-600 hover:text-sky-800 font-medium">support@shikshanation.com</a> with the following details:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>Your full name and registered email</li>
            <li>Order ID or transaction reference</li>
            <li>Reason for refund request</li>
          </ul>
          <p className="text-gray-700">
            Our team will review your request within 3–5 business days and notify you of the decision.
          </p>
        </section>

        <section id="refund-process" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            5. Refund Process
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>If approved, refunds will be processed to your original payment method.</li>
            <li>Refunds may take 25–30 business days to reflect depending on your bank or payment provider.</li>
          </ul>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            6. Contact Us
          </h2>
          <p className="mb-4 text-gray-700">
            If you have any questions or need assistance with a refund, feel free to contact us at:
          </p>
          <div className="bg-sky-50 p-6 rounded-lg">
            <h3 className="font-semibold text-sky-700 mb-2">Shiksha Nation</h3>
            <p className="mb-2">
              <strong className="text-sky-700">Email:</strong>
              <a href="mailto:support@shikshanation.com" className="text-sky-600 hover:text-sky-800 ml-2">support@shikshanation.com</a>
            </p>
            <p>
              <strong className="text-sky-700">Website:</strong>
              <a href="https://www.shikshanation.com" className="text-sky-600 hover:text-sky-800 ml-2" target="_blank" rel="noopener noreferrer">www.shikshanation.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicyContent;
