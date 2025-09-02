import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

const founder = {
  name: 'Saurabh Kumar',
  title: 'Founder & CEO of Shiksha Nation',
  img: '/saurabh-kumar.jpeg',
  border: 'border-purple-300',
  container: 'bg-purple-100',
  description: 'Rajat Sharma, an IIT Bombay alumnus and Computer Science engineer, has led growth at Flipkart, Vedantu, Toppr, FlipLearn, and Growth School. A certified strategist in business and marketing, he now drives expansion and customer acquisition at Shiksha Nation, building Bharat\'s first AI-powered learning ecosystem.',
  linkedin: 'https://www.linkedin.com/in/saurabh-kumar-051276/'
};

const managementTeam = [
  {
    name: 'Rajat Sharma',
    title: 'Chief Business Officer (CBO)',
    img: '/rajat-sharma.png',
    border: 'border-blue-300',
    container: 'bg-blue-100',
    description: 'Rajat Sharma, an IIT Bombay alumnus and Computer Science engineer, has led growth at Flipkart, Vedantu, Toppr, FlipLearn, and Growth School. A certified strategist in business and marketing, he now drives expansion and customer acquisition at Shiksha Nation, building Bharat\'s first AI-powered learning ecosystem.',
    linkedin: 'https://www.linkedin.com/in/rajatsharma089/'
  },
  {
    name: 'Gaurav Mittal',
    title: 'Chief Technology & HR Officer (CTO & HR Head)',
    img: '/Gaurav-Mittal.png',
    border: 'border-green-300',
    container: 'bg-green-100',
    description: 'Gaurav Mittal, an MBA from Symbiosis with backgrounds in IT and Commerce, has led tech at HCL Technologies and EXL. At Shiksha Nation, he drives technology and HR, ensuring Bharat\'s AI-powered education platform is scalable, personalized, and built on an ethical, high-performance culture.',
    linkedin: 'https://www.linkedin.com/in/gmittal1/'
  },
  {
    name: 'Anurag Mishra',
    title: 'Vice President, Academics',
    img: '/anurag.png',
    border: 'border-green-300',
    container: 'bg-green-100',
    description: 'Anurag Misra, IIT Roorkee alumnus and renowned Physics author, has over 25 years mentoring JEE/NEET aspirants. As VP-Academics at Shiksha Nation, he leads AI-powered strategies to make learning joyful, simple, and effective for Bharat\'s students.',
    linkedin: ''
  },
  {
    name: 'Dr. NK Sharma',
    title: 'Vice President, Academics (Biology & NEET)',
    img: '/NK.png',
    border: 'border-blue-300',
    container: 'bg-blue-100',
    description: 'Dr. NKS, a medical graduate from LLRM Medical College, has 20+ years in NEET coaching and is author of Master Class in Biology and Pearson Guide for AIPMT. A digital learning pioneer, he now drives AI-powered, student-centric science education at Shiksha Nation.',
    linkedin: ''
  },
];

const ManagementTeam = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Meet Our Management Team</h2>
      <p className="text-center text-gray-500 mb-12 text-base md:text-lg">
        The minds behind Shiksha Nation — leading with vision, passion, and purpose.
      </p>

      {/* Founder Section */}
      <div className="flex justify-center mb-12">
        <div className={`rounded-2xl relative bg-white shadow-lg flex flex-col md:flex-row w-full sm:max-w-2xl border ${founder.border} overflow-hidden`}>
          {/* Circular colored background - positioned top-left, 50% visible */}
          <div className={`${founder.container} absolute -top-16 -left-16 w-32 h-32 rounded-full`}></div>

          {/* Profile Image - vertically centered */}
          <div className="flex justify-center md:justify-start items-center p-6 md:w-48">
            <div className="w-28 h-28 md:w-32 md:h-32 relative">
              <Image
                src={founder.img}
                alt={founder.name}
                fill
                className="rounded-full object-cover border-4 border-white"
                sizes="(max-width: 768px) 112px, 128px"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 pt-0 md:pt-6 text-center md:text-left">
            <div className="flex items-center gap-2 mb-1 md:block justify-center md:justify-start">
              <h3 className="font-bold text-xl text-gray-900">{founder.name}</h3>
              {/* Mobile LinkedIn Icon - only visible on mobile and when linkedin is not empty */}
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  <FaLinkedinIn size={16} />
                </a>
              )}
            </div>

            {/* Desktop LinkedIn Icon - only visible on desktop and when linkedin is not empty */}
            {founder.linkedin && (
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block absolute top-4 right-4 z-10 bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>
            )}

            <p className="text-gray-700 text-sm font-medium mb-3">{founder.title}</p>
            <p className="text-gray-600 text-xs leading-relaxed">{founder.description}</p>
          </div>
        </div>
      </div>

      {/* Management Team Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {managementTeam.map((member, idx) => (
          <div
            key={member.name}
            className={`rounded-2xl relative bg-white shadow-lg flex flex-col md:flex-row border ${member.border} transition-transform hover:scale-105 overflow-hidden`}
          >
            {/* Circular colored background - positioned top-left, 50% visible */}
            <div className={`${member.container} absolute -top-14 -left-14 w-28 h-28 rounded-full`}></div>

            {/* Profile Image - vertically centered */}
            <div className="flex justify-center md:justify-start items-center p-6 md:w-40">
              <div className="w-24 h-24 md:w-28 md:h-28 relative">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-white"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 pt-0 md:pt-6 text-center md:text-left">
              <div className="flex items-center gap-2 mb-1 md:block justify-center md:justify-start">
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                {/* Mobile LinkedIn Icon - only visible on mobile and when linkedin is not empty */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                )}
              </div>

              {/* Desktop LinkedIn Icon - only visible on desktop and when linkedin is not empty */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block absolute top-4 right-4 z-10 bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors"
                >
                  <FaLinkedinIn size={16} />
                </a>
              )}

              <p className="text-gray-700 text-sm font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagementTeam;
