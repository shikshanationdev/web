import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

const founder = {
  name: 'Saurabh Kumar',
  title: 'Founder & CEO',
  img: '/saurabh-kumar.png',
  border: 'border-purple-300',
  container: 'bg-purple-100',
  description: 'A Gold Medalist in Mechanical Engineering, PhD from Germany, and IIM alumnus, Dr. Saurabh Kumar has over 24 years of academic leadership across India and the Middle East. He has held senior roles at VMC, PW, CL Educate, FIITJEE, and pioneered test prep in the MENA region. He has mentored over 1 lakh students including IITians, NEET toppers, Olympiad winners, and board rankers. Now, as Founder & CEO of Shiksha Nation, he is building Bharat’s first AI-powered unified learning platform delivering quality education from Class 6 to Careers in Hindi & English.',
  linkedin: 'https://www.linkedin.com/in/saurabh-kumar-051276/'
};

// Second row team members
const secondRowTeam = [
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
    title: 'Chief Technology Officer (CTO)',
    img: '/Gaurav-Mittal.png',
    border: 'border-green-300',
    container: 'bg-green-100',
    description: 'Gaurav Mittal, an MBA from Symbiosis with backgrounds in IT and Commerce, has led tech at HCL Technologies and EXL. At Shiksha Nation, he drives technology and HR, ensuring Bharat\'s AI-powered education platform is scalable, personalized, and built on an ethical, high-performance culture.',
    linkedin: 'https://www.linkedin.com/in/gmittal1/'
  }
];

// Third row team members
const thirdRowTeam = [
  {
    name: 'Anurag Mishra',
    title: 'VP Academics JEE',
    img: '/anurag.png',
    border: 'border-green-300',
    container: 'bg-green-100',
    description: 'Anurag Misra, IIT Roorkee alumnus and renowned Physics author, has over 25 years mentoring JEE/NEET aspirants. As VP-Academics at Shiksha Nation, he leads AI-powered strategies to make learning joyful, simple, and effective for Bharat\'s students.',
    linkedin: 'https://www.linkedin.com/in/anurag-misra-20a381329/'
  },
  {
    name: 'Dr. NK Sharma',
    title: 'VP Academics NEET',
    img: '/NK.png',
    border: 'border-blue-300',
    container: 'bg-blue-100',
    description: 'Dr. NK. Sharma, a medical graduate from LLRM Medical College, has 20+ years in NEET coaching and is author of Master Class in Biology and Pearson Guide for AIPMT. A digital learning pioneer, he now drives AI-powered, student-centric science education at Shiksha Nation.',
    linkedin: '#'
  },
  {
    name: 'Dr. Gaurav Sharma',
    title: 'AVP Academics',
    img: '/Gaurav-Sharma.png',
    border: 'border-purple-300',
    container: 'bg-purple-100',
    description: 'Dr. Gaurav Sharma brings over 20 years of interdisciplinary expertise in neuroscience, chemistry, dentistry, and cognitive psychology. As Associate Vice President at Shiksha Nation, he has mentored thousands of NEET aspirants and designed innovative learning curricula to help students learn smarter and excel.',
    linkedin: 'https://www.linkedin.com/in/drgauravsharma/'
  }
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

          {/* LinkedIn Icon - positioned top-right for all views */}
          {founder.linkedin && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
          )}

          {/* Content Section */}
          <div className="flex-1 p-6 pt-0 md:pt-6 text-center md:text-left">
            <h3 className="font-bold text-xl text-gray-900 mb-1">{founder.name}</h3>

            <p className="text-gray-700 text-sm font-medium mb-3">{founder.title}</p>
            <p className="text-gray-600 text-xs leading-relaxed">{founder.description}</p>
          </div>
        </div>
      </div>

      {/* Second Row - Management Team */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
        {secondRowTeam.map((member, idx) => (
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

            {/* LinkedIn Icon - positioned top-right for all views */}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>
            )}

            {/* Content Section */}
            <div className="flex-1 p-6 pt-0 md:pt-6 text-center md:text-left">
              <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>

              <p className="text-gray-700 text-sm font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Third Row - Academic Team */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {thirdRowTeam.map((member, idx) => (
          <div
            key={member.name}
            className={`rounded-2xl relative bg-white shadow-lg flex flex-col border ${member.border} transition-transform hover:scale-105 overflow-hidden`}
          >
            {/* Circular colored background - positioned top-left, 50% visible */}
            <div className={`${member.container} absolute -top-14 -left-14 w-28 h-28 rounded-full`}></div>

            {/* Profile Image - centered */}
            <div className="flex justify-center items-center p-6">
              <div className="w-24 h-24 relative">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-white"
                  sizes="96px"
                />
              </div>
            </div>

            {/* LinkedIn Icon - positioned top-right for all views when available */}
            {member.linkedin && member.linkedin !== '#' && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>
            )}

            {/* Content Section */}
            <div className="flex-1 p-6 pt-0 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>

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
