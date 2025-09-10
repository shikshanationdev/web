import React from 'react';
import Banner from '@/components/Banner';
import PrivacyPolicyContent from '@/components/privacy/PrivacyPolicyContent';

const PrivacyPolicyPage = () => {
  return (
    <div className='max-w-[1536px] mx-auto'>
      <Banner
        heading="Privacy Policy"
        subtitle="Your privacy is important to us"
      />
      <PrivacyPolicyContent />
    </div>
  );
};

export default PrivacyPolicyPage;
