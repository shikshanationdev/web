// components/about/AboutHero.tsx
import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactHero: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
