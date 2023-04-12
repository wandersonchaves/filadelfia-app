import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillHeart } from 'react-icons/ai'

// import heart from "../../assets/images/shapes/heart-2-1.png";
// import welcomeImage from "../../assets/images/resources/welcome-1-1.png";
// import aboutImage from "../../assets/images/shapes/about-bag-1-2.png";

const AboutTwo = () => {
  return (
    <section className='about-two pt-120 pb-120'>
      <Container>
        <Row>
          <Col xl={6}>
            <div className='about-two__image'>
              {/* <img src={welcomeImage} alt="" /> */}
              <div className='about-two__award'>
                {/* <img src={aboutImage} alt="" /> */}
                <AiFillHeart />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className='about-two__content'>
              <div className='block-title'>
                <p>
                  {/* <img src={heart} width="15" alt="" /> About Azino Platform */}
                  <RiHeartFill />
                </p>
                <h3>
                  Bem-vindo à organização de caridade sem fins lucrativos.
                </h3>
              </div>
              <p className='mb-40 pr-10'>
                Lorem muito cenoura, Tomato notou desenvolvedor adiposo Mas eu
                faço o iimod cortado para simplesmente livre para trabalhar e
                dor Ótimo alguns simhy adndnh qkhhn.
              </p>
              <Row>
                <Col md={6}>
                  <div className='about-two__box'>
                    <h3>
                      <i className='azino-icon-confirmation'></i> Se tornar um
                      Voluntário
                    </h3>
                    <p>
                      Desenvolvedor de Lorem muito cenouras, mas o tomate atado.{' '}
                    </p>
                  </div>
                  <div className='about-two__box'>
                    <h3>
                      <i className='azino-icon-confirmation'></i> Quick
                      Fundraising
                    </h3>
                    <p>
                      Desenvolvedor de Lorem muito cenouras, mas o tomate atado.{' '}
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='about-two__box-two'>
                    <i className='azino-icon-support'></i>
                    <h3>
                      Você pode fazer uma grande diferença na vida de alguém.
                    </h3>
                  </div>
                </Col>
              </Row>
              <Link legacyBehavior href='/about'>
                <a className='thm-btn dynamic-radius'>Descubra mais</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutTwo
