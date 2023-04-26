import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import heartImage from "../assets/images/shapes/heart-2-1.png";

const DonationOptions = () => {
  return (
    <section className='donate-options pt-120'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='donate-options__content'>
              <div className='block-title'>
                <p>
                  {/* <img src={heartImage} width="15" alt="" /> */}
                  DOE agora
                </p>
                <h3>
                  Dê uma mão amiga <br /> para pessoas carentes.
                </h3>
              </div>
              <p>
                Lorem ipsum é simplesmente o texto fictício da impressão e{' '}
                <br /> {''}
                Indústria de composição.Você fez o Google Research <br /> que
                funciona o tempo todo. {''}
              </p>
              <div className='donate-options__call'>
                <i className='azino-icon-telephone'></i>
                <div className='donate-options__call-content'>
                  <p>
                    Tem alguma dúvida sobre doação? <br />{' '}
                    <span>Ligue para nós agora:</span>{' '}
                    <a href='tel:6668880000'>6668880000</a>
                  </p>
                </div>
              </div>
              <div className='donate-options__icon-wrap'>
                <div className='donate-options__icon'>
                  <i className='azino-icon-dove'></i>
                  <h3>
                    <a href='#'>Vivendo</a>
                  </h3>
                </div>
                <div className='donate-options__icon'>
                  <i className='azino-icon-hamburger'></i>
                  <h3>
                    <a href='#'>Comida</a>
                  </h3>
                </div>
                <div className='donate-options__icon'>
                  <i className='azino-icon-family'></i>
                  <h3>
                    <a href='#'>Família</a>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <form
              action='#'
              className='donate-options__form wow fadeInUp'
              data-wow-duration='1500ms'
            >
              <h3 className='text-center'>Comece a doar agora</h3>
              <p className='text-center'>
                Lorem muito cenouras, conceptor <br /> Desenvolvedor adipisante
                Mas eu faço o od tempus para trabalhar.
              </p>
              <label htmlFor='donate-name' className='sr-only'></label>
              <input type='text' id='donate-name' placeholder='Your Name' />
              <label htmlFor='donate-amount' className='sr-only'></label>
              <input
                type='text'
                placeholder='Inserir valor'
                id='donate-amount'
              />
              <ul id='donate-amount__predefined' className='list-unstyled'>
                <li>
                  <a href='#'>$ 10</a>
                </li>
                <li>
                  <a href='#'>$ 20</a>
                </li>
                <li>
                  <a href='#'>$ 50</a>
                </li>
              </ul>
              <button type='submit' className='thm-btn '>
                DOE agora
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DonationOptions
