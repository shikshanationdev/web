import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="w-full relative top-0" style={{ minHeight: '1000px' }}>
      <Image
        src="/about-us/heroSection.svg"
        alt="About Hero Section"
        fill
        className="object-contain"
        priority
        sizes="100vw"
        style={{ objectPosition: 'top', maxHeight: '1000px' }}
      />
    </div>
  );
};

export default AboutHero;
