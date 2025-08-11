import AboutHero from '@/components/about/AboutHero'
import AboutWhoWeAre from '@/components/about/AboutWhoWeAre'
import MissionVisionCard from '@/components/about/MissionVisionCard'
import ManagementTeam from '@/components/about/ManagementTeam'
import { StatesSection, TestimonialsSection } from '@/components/HomePageSections'
import React from 'react'
import AffiliationsCertifications from '@/components/about/AffiliationsCertifications'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import GetInTouchSection from '@/components/about/GetInTouchSection'

const About = () => {
  return (
    <div className='max-w-[1536px] mx-auto'>
     <AboutHero />
     <AboutWhoWeAre />
     <MissionVisionCard />
     <StatesSection />
     <ManagementTeam />
     <AffiliationsCertifications />
     <WhyChooseUs />
     <TestimonialsSection />
     <GetInTouchSection />  
    </div>
  )
}

export default About
