import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Certified, Job-Ready Courses',
    description: 'Each course is designed with industry-aligned skills and ends with a recognized certificate to boost your career opportunities.',
    bg: 'bg-blue-50',
    textColor: 'text-blue-600',
    icon: '/about-us/Certified, Job Ready Courses.svg',
  },
  {
    title: 'Unlimited Lifetime Access',
    description: 'Learn at your pace, revisit lessons anytime, and continue to grow — even years after enrolling. Your access never expires.',
    bg: 'bg-green-50',
    textColor: 'text-green-600',
    icon: '/about-us/Unlimited Lifetime Access.svg',
  },
  {
    title: 'Top Mentors & Live Support',
    description: 'Our expert instructors and live student support ensure you\'re never stuck — help and guidance are always a message away.',
    bg: 'bg-blue-50',
    textColor: 'text-blue-600',
    icon: '/about-us/Top Mentors & Live Support.svg',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <p className="text-gray-500 text-lg mb-4">Why Choose Shiksha Nation</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Unlock the Powerful<br />
          Advantages of Learning with Us
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className={`${feature.bg} rounded-3xl p-8 flex flex-col items-start transition-all hover:scale-105 shadow-lg shadow-gray-100`}
          >
            <h3 className={`text-2xl font-bold ${feature.textColor} mb-6 leading-tight`}>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-1">
              {feature.description}
            </p>
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
