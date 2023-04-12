import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper'

// import banner1 from "../../assets/images/main-slider/slider-1-1.jpg";
// import banner2 from "../../assets/images/main-slider/slider-1-2.jpg";
// import banner3 from "../../assets/images/main-slider/slider-2-1.jpg";

SwiperCore.use([Autoplay, Pagination, EffectFade])

const MainSlider = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    pagination: {
      el: '#main-slider-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  }
  return (
    <section className='main-slider'>
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className='image-layer'
            // style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className='row justify-content-end'>
              <Col xl={7} lg={12} className='text-right'>
                <p>Ajude os pobres necessitados</p>
                <h2>
                  Emprestar a mão <br /> Helping Hand <br /> se envolver.
                </h2>
                <a
                  href='#'
                  data-target='.donate-options'
                  className='scroll-to-target thm-btn'
                >
                  Comece a doar
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='image-layer'
            // style={{ backgroundImage: `url(${banner2})` }}
          ></div>

          <Container>
            <Row className='row justify-content-end'>
              <Col xl={8} lg={12} className='text-right'>
                <p>Ajude os pobres necessitados</p>
                <h2>
                  <span className='iconic-text'>Eu</span>
                  não <br /> posso mudar <br /> a vida
                </h2>
                <a
                  href='#'
                  data-target='.donate-options'
                  className='scroll-to-target thm-btn '
                >
                  Comece a doar
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='image-layer'
            // style={{ backgroundImage: `url(${banner3})` }}
          ></div>

          <Container>
            <Row className='justify-content-end'>
              <Col lg={7} className=' text-right'>
                <p>Ajude os pobres necessitados</p>
                <h2>
                  Emprestar a mão <br /> Helping Hand <br /> se envolver.
                </h2>
                <a
                  href='#'
                  data-target='.donate-options'
                  className='scroll-to-target thm-btn '
                >
                  Comece a doar
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <div className='swiper-pagination' id='main-slider-pagination'></div>
      </Swiper>
    </section>
  )
}

export default MainSlider
