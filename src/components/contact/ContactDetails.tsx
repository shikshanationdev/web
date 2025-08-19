import React from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import Image from 'next/image';

const contactInfo = [
  {
    icon: MdEmail,
    label: "EMAIL",
    content: "hello@shikshanation.com"
  },
  {
    icon: MdPhone,
    label: "PHONE",
    content: "+91 98211 15117"
  },
  {
    icon: MdLocationOn,
    label: "ADDRESS",
    content: "10th floor Tower C Bhutani 62 Avenue, Block - C, Phase 2, Industrial Area, Noida, Uttar Pradesh 201309"
  },
  {
    icon: MdAccessTime,
    label: "OFFICE HOURS",
    content: "10:00 AM - 6:00 PM"
  }
];

const ContactDetails: React.FC = () => (
  <div className="space-y-8 px-10">
    <div className="hidden lg:block">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        We&apos;re here to answer your questions, guide your journey,
        and help you get started with confidence.
      </p>
    </div>
    <div className="space-y-8">
      {contactInfo.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex items-center mb-2 sm:mb-0 sm:w-[160px] sm:flex-shrink-0">
              <item.icon className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-sm font-bold text-green-500 uppercase tracking-wide">
                {item.label}
              </span>
            </div>
            <div className="text-gray-900 font-medium sm:ml-4">
              {item.content}
            </div>
          </div>
          {index < contactInfo.length - 1 && (
            <div className="border-t border-gray-200"></div>
          )}
        </React.Fragment>
      ))}
    </div>
    <div className="flex items-center space-x-4 pt-8">
      <Image src="/contact-us/illustration.svg" alt="Contact Us Illustration" width={300} height={100} />
    </div>
  </div>
);

export default ContactDetails;
