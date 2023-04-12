import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SwiperCore, { Autoplay, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import BlockTitle from '../block-title'
import Image from 'next/image'
// import testimonialImage1 from "../../assets/images/resources/testimonial-2-1.jpg";
// import testimonialImage2 from "../../assets/images/resources/testimonial-2-2.jpg";
// import testimonialImage3 from "../../assets/images/resources/testimonial-2-3.jpg";

SwiperCore.use([Autoplay, Thumbs])

const TESTIMONIALS_DATA = [
  {
    // image: testimonialImage1,
    name: 'Christine Rose',
    designation: 'Cliente',
    text: 'Isso se deve ao seu excelente serviço, preços competitivos e suporte ao cliente.É completamente revigorante obter um toque pessoal tão pessoal.',
  },
  {
    // image: testimonialImage2,
    name: 'Christine Rose',
    designation: 'Cliente',
    text: 'Isso se deve ao seu excelente serviço, preços competitivos e suporte ao cliente.É completamente revigorante obter um toque pessoal tão pessoal.',
  },
  {
    // image: testimonialImage3,
    name: 'Christine Rose',
    designation: 'Cliente',
    text: 'Isso se deve ao seu excelente serviço, preços competitivos e suporte ao cliente.É completamente revigorante obter um toque pessoal tão pessoal.',
  },
]

const TestimonialsTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
  }
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  }

  return (
    <section className='testimonials-two'>
      <Container>
        <div className='team-about__top'>
          <Row className='align-items-center'>
            <Col md={12} lg={7}>
              <BlockTitle
                title={`What they are talking \n about azino.`}
                tagLine='Our Testimonials'
              />
            </Col>
            <Col md={12} lg={5}>
              <p className='team-about__top-text'>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Você fez o Google Research, que funciona
                tudo tempo.
              </p>
            </Col>
          </Row>
        </div>
        <Swiper
          id='testimonials-two__thumb'
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {TESTIMONIALS_DATA.map(({ image, name }, index) => (
            <SwiperSlide key={index}>
              <Image src={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          id='testimonials-two__carousel'
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {TESTIMONIALS_DATA.map(({ designation, name, text }, index) => (
            <SwiperSlide key={index}>
              <p>{text}</p>
              <div className='testimonials-two__meta'>
                <h3>{name}</h3>
                <span>{designation}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default TestimonialsTwo
