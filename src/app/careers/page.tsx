import React from 'react'
import Banner from '@/components/Banner'
import CareersHero from '@/components/careers/CareersHero'
import CareersValues from '@/components/careers/CareersValues'
import CareersForm from '@/components/careers/CareersForm'

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
