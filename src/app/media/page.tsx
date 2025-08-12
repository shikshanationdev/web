import React from 'react'
import MediaHero from '../../components/media/MediaHero'

import MediaContact from '@/components/media/MediaContact'
import MediaGrid from '@/components/media/MediaGrid'

const Media = () => {
  return <div className='max-w-[1536px] mx-auto px-4'>
    <MediaHero />
    <MediaGrid />
    <MediaContact />
  </div>
}

export default Media
