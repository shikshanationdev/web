import AboutHero from '@/components/about/AboutHero'
import AboutWhoWeAre from '@/components/about/AboutWhoWeAre'
import MissionVisionCard from '@/components/about/MissionVisionCard'
import ManagementTeam from '@/components/about/ManagementTeam'
import { StatesSection } from '@/components/HomePageSections'
import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1536px] mx-auto'>
     <AboutHero />
     <AboutWhoWeAre />
     <MissionVisionCard />
     <ManagementTeam />
     <StatesSection />
    </div>
  )
}

export default About
