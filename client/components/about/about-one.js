import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { RiHandHeartFill } from 'react-icons/ri'
import { AiFillHeart } from 'react-icons/ai'

// import about1 from "../../assets/images/shapes/about-bag-1-1.png";
// import about2 from "../../assets/images/resources/about-1-1.jpg";
// import about3 from "../../assets/images/resources/about-1-2.jpg";
// import heart from "../../assets/images/shapes/heart-2-1.png";

const AboutOne = () => {
  return (
    <section className='about-one pt-120 pb-40'>
      <Container>
        <Row>
          <div className='about-one__award'>
            {/* <img src={about1} alt="" /> */}
            <RiHandHeartFill />
          </div>
          <Col lg={6}>
            {/* <img src={about2} alt="" className="img-fluid" /> */}
          </Col>
          <Col lg={6}>
            {/* <img src={about3} alt="" className="img-fluid" /> */}
          </Col>
        </Row>
      </Container>
      <Container>
        <div className='team-about__top mt-60'>
          <Row>
            <Col md={12} lg={4}>
              <div className='block-title'>
                <p>
                  {/* <img src={heart} width="15" alt="" /> */}
                  <AiFillHeart size={15} />
                  Faça a diferença{' '}
                </p>
                <h3>Vamos ajudá -los juntos.</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className='team-about__top-text'>
                Os desenvolvedores da Nulla Nulla Boots são maecenas. Sapien
                Nunced Basketball Mainstream, a dor é muito ao ar livre As
                bananas, carbono clínico de leão ecológico em massa.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <p className='team-about__top-text'>
                Sapien Nunced Basketball Mainstream, a dor é muito ao ar livre
                Curabitur, clínica de tempo ecológico em massa.Lorem muito
                cenouras. Minneapolis é truque de desenvolvedor de aeronaves
                cing.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default AboutOne
