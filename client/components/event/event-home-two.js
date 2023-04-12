import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import EventCard from './event-card'
// import bgImage from "../../assets/images/shapes/event-map-1-2.png";
// import image1 from "../../assets/images/events/event-1-1.jpg";
// import image2 from "../../assets/images/events/event-1-2.jpg";
// import image3 from "../../assets/images/events/event-1-3.jpg";
// import image4 from "../../assets/images/events/event-1-4.jpg";
// import heart from "../../assets/images/shapes/heart-2-1.png";

const EVENT_HOME_TWO_DATA = [
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
]
const EventHomeTwo = () => {
  return (
    <section
      className='event-home-two pb-120'
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <Row className=' align-items-start align-items-md-center flex-column flex-md-row mb-60'>
          <Col lg={7}>
            <div className='block-title'>
              <p>
                {/* <img src={heart} width="15" alt="" /> */}
                Última lista de eventos
              </p>
              <h3>Confira nossa próxima lista de eventos completa.</h3>
            </div>
          </Col>
          <Col lg={5} className='d-flex'>
            <div className='my-auto'>
              <p className='block-text pr-10 mb-0'>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Você fez o Google Research, que funciona
                tudo tempo.{' '}
              </p>
            </div>
          </Col>
        </Row>
        <div className='event-grid'>
          {EVENT_HOME_TWO_DATA.map((event, index) => (
            <EventCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default EventHomeTwo
