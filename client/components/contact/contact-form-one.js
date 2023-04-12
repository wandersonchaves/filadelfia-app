import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import BlockTitle from '../block-title'

const ContactFormOne = () => {
  return (
    <section className='contact-page pt-120 pb-80'>
      <Container>
        <Row>
          <Col lg={5}>
            <div className='contact-page__content mb-40'>
              <BlockTitle
                title={`Feel free to write us \n a message.`}
                tagLine='Entre em contato conosco'
              />
              <p className='block-text mb-30 pr-10'>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Você fez o Google Research, que funciona
                tudo tempo.{' '}
              </p>
              <div className='footer-social black-hover'>
                <a href='#' aria-label='twitter'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#' aria-label='facebook'>
                  <i className='fab fa-facebook-square'></i>
                </a>
                <a href='#' aria-label='pinterest'>
                  <i className='fab fa-pinterest-p'></i>
                </a>
                <a href='#' aria-label='instagram'>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <form className='contact-form-validated contact-page__form form-one mb-40'>
              <div className='form-group'>
                <div className='form-control'>
                  <label htmlFor='name' className='sr-only'>
                    Nome
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Seu nome'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='email' className='sr-only'>
                    e-mail
                  </label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    placeholder='Endereço de email'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='phone' className='sr-only'>
                    telefone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    placeholder='Número de telefone'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='subject' className='sr-only'>
                    assunto
                  </label>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Assunto'
                  />
                </div>
                <div className='form-control form-control-full'>
                  <label htmlFor='message' className='sr-only'>
                    mensagem
                  </label>
                  <textarea
                    name='message'
                    placeholder='Escreve uma mensagem'
                    id='message'
                  ></textarea>
                </div>
                <div className='form-control form-control-full'>
                  <button type='submit' className='thm-btn '>
                    Enviar mensagem
                  </button>
                </div>
              </div>
            </form>
            <div className='result'></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactFormOne
