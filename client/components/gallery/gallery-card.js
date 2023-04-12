import Image from 'next/image'
import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox'

const GalleryCard = ({ image }) => {
  return (
    <SimpleReactLightbox>
      <div className='gallery-card'>
        <Image src={image} className='img-fluid' alt='' />
        <SRLWrapper>
          <div className='gallery-content'>
            <a
              href={image}
              className='img-popup'
              data-attribute='SRL'
              aria-label='open image'
            >
              <Image src={image} className='img-fluid sr-only' alt='' />
              <i className='fal fa-plus'></i>
            </a>
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  )
}

export default GalleryCard
