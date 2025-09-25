"use client";
import React from "react";

const ShippingExchangePolicyContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="max-w-none">
        <p className="mb-8 text-gray-600">
          <strong>Effective Date:</strong> 24 September 2025
        </p>
        <p className="mb-8 text-gray-700">
          At Shiksha Nation, all courses, test series, and educational materials are delivered exclusively through digital means via our website and mobile application. We do not provide any physical products, printed materials, or hard copy shipments.
        </p>

        <section id="digital-delivery" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            Digital-Only Delivery
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>All purchases made through Shiksha Nation are delivered instantly or within a stipulated activation period directly to your registered account.</li>
            <li>Users will receive access to their purchased content through the Shiksha Nation platform, accessible by logging in with their enrolled credentials.</li>
            <li>There are no shipping or handling fees, as no physical goods are shipped.</li>
          </ul>
        </section>

        <section id="no-shipping" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            No Shipping Policy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Shiksha Nation does not ship any physical items, products, or documents to customers.</li>
            <li>You will not receive any packages, hard copy course materials, or correspondence through postal or courier services.</li>
          </ul>
        </section>

        <section id="exchange-policy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            Exchange Policy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>As all purchases involve digital content and courses, no exchanges are possible or applicable.</li>
            <li>Please review all course details, content outlines, and eligibility requirements thoroughly before making your purchase.</li>
          </ul>
        </section>

        <section id="support" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-700">
            Support
          </h2>
          <p className="mb-4 text-gray-700">
            If you face any technical issues accessing your content or have questions about your order, please contact our support team at <a href="mailto:support@shikshanation.com" className="text-sky-600 hover:text-sky-800 font-medium">support@shikshanation.com</a>. Our team is available to assist you with any platform-related concerns.
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

export default ShippingExchangePolicyContent;
