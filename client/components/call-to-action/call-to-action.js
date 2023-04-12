import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className='call-to-action'>
      <Container>
        <Row className='align-items-center'>
          <Col xl={9} lg={8}>
            <div className='call-to-action__content'>
              <div className='call-to-action__icon'>
                <i className='azino-icon-support'></i>
              </div>
              <h3>
                Vamos fazer a diferença em <br /> A vida dos outros{' '}
              </h3>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            className='d-flex justify-content-start justify-content-md-center justify-content-xl-end justify-content-lg-end'
          >
            <Link legacyBehavior href='/become-volunteer'>
              <a className='thm-btn '>Torne -se um voluntário</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CallToAction
