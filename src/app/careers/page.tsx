import React from 'react'
import Banner from '@/components/Banner'
import CareersHero from '@/components/careers/CareersHero'
import CareersValues from '@/components/careers/CareersValues'
import CareersForm from '@/components/careers/CareersForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Shiksha Nation",
  description:
    "Explore exciting career opportunities at Shiksha Nation. Be part of a growing team and make an impact in the education sector.",
};

const page = () => {
  return (
    <main className='min-h-screen'>
      <Banner heading="Career" />
      <CareersHero />
      <CareersValues />
      <CareersForm />
    </main>
  )
}

export default page
