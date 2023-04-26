import React, { useContext } from 'react'
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import AccordionContext from 'react-bootstrap/AccordionContext'
// import heart from "../assets/images/shapes/heart-2-1.png";
// import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
// import faqImage from "../assets/images/resources/faq-box-1-1.jpg";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext)

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )

  const isCurrentEventKey = currentEventKey === eventKey

  return (
    <h2
      className='para-title'
      style={{ color: `${isCurrentEventKey ? 'var(--thm-secondary)' : ''}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? 'var(--thm-secondary)' : ''}`,
          }}
          className={`far ${isCurrentEventKey ? 'fa-minus' : 'fa-plus'}`}
        ></i>
        {children}
      </span>
    </h2>
  )
}
const FaqOne = () => {
  return (
    <section className='faq-one pt-120'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='faq-one__content'>
              <div className='block-title'>
                <p>
                  {/* <img src={heart} width="15" alt="" /> */}
                  Ajude as pessoas agora
                </p>
                <h3>
                  Caridade para as pessoas <br /> você se preocupa.
                </h3>
              </div>

              <Accordion
                as='ul'
                id='accordion'
                defaultActiveKey='1'
                className='list-unstyled'
              >
                <Card as='li'>
                  <ContextAwareToggle eventKey='0'>
                    Faça a diferença em sua vida
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey='0'>
                    <p>
                      Existem muitas variações de passagens que a maioria tem
                      sofreu alteração em algum humor injetado, ou palavras
                      randomizadas críveis.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as='li'>
                  <ContextAwareToggle eventKey='1'>
                    Faça a diferença em sua vida
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey='1'>
                    <p>
                      Existem muitas variações de passagens que a maioria tem
                      sofreu alteração em algum humor injetado, ou palavras
                      randomizadas críveis.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as='li'>
                  <ContextAwareToggle eventKey='2'>
                    Faça a diferença em sua vida
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey='2'>
                    <p>
                      Existem muitas variações de passagens que a maioria tem
                      sofreu alteração em algum humor injetado, ou palavras
                      randomizadas críveis.
                    </p>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col lg={6}>
            <div className='about-counter__image clearfix'>
              <div className='about-counter__image-content'>
                {/* <img src={heart1} alt="" /> */}
                <p>Estamos aqui para apoiá -lo a cada passo do caminho.</p>
              </div>
              {/* <img src={faqImage} alt="" className="float-left" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FaqOne
