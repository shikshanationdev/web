// components/about/AboutHero.tsx
import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactHero: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Mobile heading - only visible on mobile */}
        <div className="lg:hidden mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;re here to answer your questions, guide your journey,
            and help you get started with confidence.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
