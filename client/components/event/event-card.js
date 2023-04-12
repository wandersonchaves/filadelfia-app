import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const EventCard = ({ data }) => {
  const { image, title, date, time, location, link } = data
  return (
    <div className='event-card'>
      <div className='event-card-inner'>
        <div className='event-card-image'>
          <div className='event-card-image-inner'>
            <Image src={image} alt='' />
            <span>{date}</span>
          </div>
        </div>
        <div className='event-card-content'>
          <h3>
            <Link legacyBehavior href={link}>
              <a>{title}</a>
            </Link>
          </h3>
          <ul className='event-card-list'>
            <li>
              <i className='azino-icon-clock'></i>
              <strong>Tempo:</strong> {time}
            </li>
            <li>
              <i className='azino-icon-pin1'></i>
              <strong>Localização:</strong> {location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EventCard
