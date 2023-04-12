import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
// import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
// import blockTitleHeart from "../../assets/images/shapes/heart-2-1.png";

const serviceOneData = [
  {
    icon: 'azino-icon-water-bottle',
    extraClassName: 'background-secondary',
    title: 'Água',
    text: 'O Lorem Insurance é simplesmente um texto gratuito disponível nos sites de mercado.',
    link: '#',
  },
  {
    icon: 'azino-icon-hamburger',
    title: 'Comida',
    extraClassName: 'background-base',
    text: 'O Lorem Insurance é simplesmente um texto gratuito disponível nos sites de mercado.',
    link: '#',
  },
  {
    icon: 'azino-icon-reading-book',
    title: 'Educação',
    text: 'O Lorem Insurance é simplesmente um texto gratuito disponível nos sites de mercado.',
    link: '#',
    extraClassName: 'background-primary',
  },
  {
    icon: 'azino-icon-stethoscope',
    title: 'Médica',
    extraClassName: 'background-special',
    text: 'O Lorem Insurance é simplesmente um texto gratuito disponível nos sites de mercado.',
    link: '#',
  },
]

const ServiceOne = () => {
  return (
    <section
      className='service-one pt-120 pb-90'
      // style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        {/* <img src={serviceLine} alt="" className="service-one__shape-1" /> */}
        <div className='block-title'>
          <p>
            {/* <img src={blockTitleHeart} width="15" alt="" /> */}
            Bem -vindo à caridade Azino
          </p>
          <h3>
            Acreditamos que podemos salvar <ser /> mais vidas com você.{' '}
          </h3>
        </div>
        <Row>
          {serviceOneData.map(
            ({ icon, title, text, link, extraClassName }, index) => (
              <Col md={6} lg={3} key={`service-one-key-${index}`}>
                <div className={`service-one__box`}>
                  <div className={`service-one__icon ${extraClassName}`}>
                    <div className='service-one__icon-inner'>
                      <i className={icon}></i>
                    </div>
                  </div>
                  <h3>
                    <Link legacyBehavior href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <p>{text}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  )
}

export default ServiceOne
