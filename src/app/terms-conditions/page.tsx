import React from 'react';
import Banner from '@/components/Banner';
import TermsConditionsContent from '@/components/termsCondition/TermsConditionsContent';

const TermsConditionsPage = () => {
  return (
    <div className='max-w-[1536px] mx-auto'>
      <Banner
        heading="Terms & Conditions"
        subtitle="Please read these terms carefully"
      />
      <TermsConditionsContent />
    </div>
  );
};

export default TermsConditionsPage;
