import React from 'react'
import MediaHero from '../../components/MediaHero'

import MediaContact from '@/components/MediaContact'
import MediaGrid from '@/components/MediaGrid'

const Media = () => {
  return <div className='max-w-[1536px] mx-auto px-4'>
    <MediaHero />
    <MediaGrid />
    <MediaContact />
  </div>
}

export default Media
