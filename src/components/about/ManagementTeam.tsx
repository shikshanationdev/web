import React from 'react';
import Image from 'next/image';

const founder = {
  name: 'Saurabh Kumar',
  title: 'Founder & CEO of Shiksha Nation',
  img: '/saurabh-kumar.jpeg',
  border: 'border-purple-300',
  container: 'bg-purple-100',
};

const managementTeam = [
  {
    name: 'Rajat Sharma',
    title: 'Chief Business Officer (CBO)',
    img: '/rajat-sharma.png',
    border: 'border-blue-300',
    container: 'bg-blue-100',
  },
  {
    name: 'Gaurav Mittal',
    title: 'Chief Technology & HR Officer (CTO & HR Head)',
    img: '/Gaurav-Mittal.png',
    border: 'border-green-300',
    container: 'bg-green-100',

  },
  {
    name: 'Anurag Mishra',
    title: 'Vice President, Academics',
    img: '/anurag.png',
    border: 'border-blue-300',
    container: 'bg-blue-100',
  },
  {
    name: 'Dr. N.K. Sharma',
    title: 'Vice President, Academics (Biology & NEET)',
    img: '/NK.png',
    border: 'border-green-300',
    container: 'bg-green-100',
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
        <div
          className={`rounded-2xl border ${founder.border} relative bg-white shadow-sm flex flex-col items-center p-6 transition-transform hover:scale-105 w-full sm:max-w-sm`}
        >
          <div className={`absolute w-full ${founder.container} h-20 top-0 rounded-t-2xl rounded-b-4xl`}></div>
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={founder.img}
              alt={founder.name}
              fill
              className="rounded-full object-cover"
              sizes="128px"
            />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100 rounded-t-full -z-10" />
          </div>
          <h3 className="font-bold text-xl text-gray-900 text-center mb-1">{founder.name}</h3>
          <p className="text-gray-700 text-center text-sm font-medium">{founder.title}</p>
        </div>
      </div>

      {/* Management Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {managementTeam.map((member, idx) => (
          <div
            key={member.name}
            className={`rounded-2xl border ${member.border} relative bg-white shadow-sm flex flex-col items-center p-6 transition-transform hover:scale-105`}
          >
            <div className={`absolute w-full ${member.container} h-20 top-0 rounded-t-2xl rounded-b-4xl`}></div>
            <div className="relative w-28 h-28 mb-4">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="rounded-full object-cover"
                sizes="112px"
              />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100 rounded-t-full -z-10" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 text-center mb-1">{member.name}</h3>
            <p className="text-gray-700 text-center text-sm font-medium">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagementTeam;
