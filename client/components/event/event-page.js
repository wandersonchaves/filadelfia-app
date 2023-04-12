import React from 'react'
import { Container } from 'react-bootstrap'

import EventCard from './event-card'
import PostPaginations from '../post-paginations'
// import image1 from "../../assets/images/events/event-1-1.jpg";
// import image2 from "../../assets/images/events/event-1-2.jpg";
// import image3 from "../../assets/images/events/event-1-3.jpg";
// import image4 from "../../assets/images/events/event-1-4.jpg";
// import image5 from "../../assets/images/events/event-1-5.jpg";
// import image6 from "../../assets/images/events/event-1-6.jpg";

const EVENTS_DATA = [
  {
    // image: image1,
    title: 'Ajuda para pessoas carentes',
    date: '20 de maio',
    time: '9:00 02:00',
    location: 'Nova Iorque',
    link: '/event-details',
  },
  {
    // image: image2,
    title: 'Ajuda para pessoas carentes',
    date: '20 de maio',
    time: '9:00 02:00',
    location: 'Nova Iorque',
    link: '/event-details',
  },
  {
    // image: image3,
    title: 'Ajuda para pessoas carentes',
    date: '20 de maio',
    time: '9:00 02:00',
    location: 'Nova Iorque',
    link: '/event-details',
  },
  {
    // image: image4,
    title: 'Ajuda para pessoas carentes',
    date: '20 de maio',
    time: '9:00 02:00',
    location: 'Nova Iorque',
    link: '/event-details',
  },
  {
    // image: image5,
    title: 'Ajuda para pessoas carentes',
    date: '20 de maio',
    time: '9:00 02:00',
    location: 'Nova Iorque',
    link: '/event-details',
  },
  {
    // image: image6,
    title: 'Ajuda para pessoas carentes',
    date: '20 de maio',
    time: '9:00 02:00',
    location: 'Nova Iorque',
    link: '/event-details',
  },
]
const EventPage = () => {
  return (
    <section className='event-page pt-120 pb-120'>
      <Container>
        <div className='event-grid'>
          {EVENTS_DATA.map((event, index) => (
            <EventCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
        <PostPaginations />
      </Container>
    </section>
  )
}

export default EventPage
