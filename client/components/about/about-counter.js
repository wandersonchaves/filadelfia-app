import React, { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// import heartImage from "../../assets/images/shapes/heart-2-1.png";
// import aboutImage from "../../assets/images/resources/about-counter-1-1.jpg";
// import aboutHeart from "../../assets/images/shapes/about-count-heart-1-1.png";

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  })

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true })
    }
  }
  return (
    <section className='about-counter pt-120'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='block-title'>
              <p>
                {/* <img src={heartImage} width="15" alt="" /> */}
                <AiFillHeart size={15} />
                Ajude as pessoas agora
              </p>
              <h3>
                Caridade para as pessoas <br />
                Você se importa.
              </h3>
            </div>
            <p className='about-counter__text'>
              Lorem ipsum é simplesmente o texto fictício da impressão e <br />{' '}
              {''}
              Indústria de composição.Você fez o Google Research que <br /> {''}
              funciona o tempo todo. {''}
            </p>
            <ul className='list-unstyled ul-list-one'>
              <li>Conceituar cing elite.</li>
              <li>Suspeito ndisse suscipit sagittis leão.</li>
              <li>Endessime Soccer Set.</li>
            </ul>
            <div className='about-counter__count'>
              <h3 className='odometer'>
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 8860 : 0} />
                </VisibilitySensor>
              </h3>
              <p>
                Campanhas de doação <br /> estão em execução{' '}
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className='about-counter__image clearfix'>
              <div className='about-counter__image-content'>
                {/* <img src={aboutHeart} alt="" /> */}
                <AiOutlineHeart size={60} />
                <p>Estamos aqui para apoiá-lo a cada passo do caminho.</p>
              </div>
              {/* <img src={aboutImage} alt="" className="float-left" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutCounter
