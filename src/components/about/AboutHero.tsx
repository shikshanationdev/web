import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/about-us/heroSection.svg"
        alt="About Hero Section"
        width={0}
        height={0}
        className="w-full h-auto"
        priority
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default AboutHero;
