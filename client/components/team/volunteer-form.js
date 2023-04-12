import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// import heart from "../../assets/images/shapes/heart-2-1.png";

const VolunteerForm = () => {
  return (
    <section className='become-volunteer pt-120 pb-80'>
      <Container>
        <Row>
          <Col lg={5}>
            <div className='become-volunteer__content mb-40'>
              <div className='block-title'>
                <p>
                  {/* <img src={heart} width="15" alt="" /> */}
                  Junte-se a nós agora
                </p>
                <h3>
                  Registre -se como <br /> nosso voluntário.
                </h3>
              </div>
              <p className='block-text mb-40 pr-10'>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Você fez o Google Research, que funciona
                tudo tempo.{' '}
              </p>
              <ul className='list-unstyled ul-list-one'>
                <li>Conceituar cing elite.</li>
                <li>Suspeito ndisse suscipit sagittis leão.</li>
                <li>Endessime Soccer Set.</li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <form className='contact-form-validated become-volunteer__form form-one mb-40'>
              <div className='form-group'>
                <div className='form-control'>
                  <label htmlFor='name' className='sr-only'>
                    nome
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
                  <label htmlFor='date-of-birth' className='sr-only'>
                    data de nascimento
                  </label>
                  <input
                    type='text'
                    name='date'
                    id='date-of-birth'
                    placeholder='Data de nascimento'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='address' className='sr-only'>
                    endereço
                  </label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    placeholder='Endereço'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='occupation' className='sr-only'>
                    ocupação
                  </label>
                  <input
                    type='text'
                    name='occupation'
                    id='occupation'
                    placeholder='Ocupação'
                  />
                </div>
                <div className='form-control form-control-full'>
                  <label htmlFor='message' className='sr-only'>
                    mensagem
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    placeholder='Escreve uma mensagem'
                  ></textarea>
                </div>
                <div className='form-control form-control-full'>
                  <button type='submit' className='thm-btn '>
                    Registrar agora
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

export default VolunteerForm
