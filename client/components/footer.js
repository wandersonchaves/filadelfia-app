import React from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { Container, Row, Col } from 'react-bootstrap'
// import logoLight from "../assets/images/logo-light.png";
// import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
// import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";

const Footer = () => {
  return (
    <section className='site-footer'>
      <div className='main-footer pt-142 pb-80'>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className='footer-widget mb-40 footer-widget__about'>
                <Link legacyBehavior href='/'>
                  <a aria-label='logo image'>
                    {/* <img
                      // src={logoLight}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    /> */}
                  </a>
                </Link>
                <p>
                  Lorem muito cenouras consta para o modelo de assistência de
                  eTUR, no entanto,.
                </p>
                <ul className='list-unstyled footer-widget__contact'>
                  <li>
                    <a href='#'>
                      <i className='azino-icon-telephone'></i>6668880000
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='azino-icon-email'></i>necessithelp@azino.com
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='azino-icon-pin'></i>88 Broklyn Golden Rua,
                      EUA
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className='footer-widget footer-widget__link mb-40'>
                <h3 className='footer-widget__title'>Explorar</h3>
                <ul className='list-unstyled footer-widget__link-list'>
                  <li>
                    <Link legacyBehavior href='/causes'>
                      <a>Nossas causas</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/about'>
                      <a>Sobre nós</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/news'>
                      <a>Nova campanha</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/events'>
                      <a>próximos eventos</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/about'>
                      <a>Mapa do site</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/contact'>
                      <a>Ajuda</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/causes'>
                      <a>Doar</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/contact'>
                      <a>Contate-nos</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href='/contact'>
                      <a>Termos</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className='footer-widget mb-40 footer-widget__blog'>
                <h3 className='footer-widget__title'>blog</h3>
                <ul className='list-unstyled footer-widget__blog'>
                  <li>
                    {/* <img src={blogPost1} alt="" /> */}
                    <p>22 de maio, 2020</p>
                    <h3>
                      <Link legacyBehavior href='/news-details'>
                        <a>Você pode ajudar os pobres necessitados</a>
                      </Link>
                    </h3>
                  </li>
                  <li>
                    {/* <img src={blogPost2} alt="" /> */}
                    <p>22 de maio, 2020</p>
                    <h3>
                      <Link legacyBehavior href='/news-details'>
                        <a>Fundo de ascensão para alimentos saudáveis</a>
                      </Link>
                    </h3>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className='footer-widget mb-40 footer-widget__newsletter'>
                <h3 className='footer-widget__title'>Boletim de Notícias</h3>
                <p>
                  Inscreva -se agora para obter as últimas notícias e
                  atualizações diárias de nós
                </p>
                <form
                  data-url='https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e'
                  className='footer-widget__newsletter-form mc-form'
                >
                  <label htmlFor='mc-email' className='sr-only'>
                    Endereço de email
                  </label>
                  <input
                    type='email'
                    name='EMAIL'
                    id='mc-email'
                    className=''
                    placeholder='Endereço de email'
                  />
                  <div className='footer-widget__newsletter-btn-wrap d-flex justify-content-end'>
                    <button type='submit' className='thm-btn '>
                      Inscreva-se agora
                    </button>
                  </div>
                </form>
                <div className='mc-form__response'></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <ScrollLink
            to='wrapper'
            smooth={true}
            duration={500}
            className='scroll-to-top'
          >
            <i className='far fa-angle-up'></i>
          </ScrollLink>
          <p>© Copyright 2020 por layerdrops.com</p>
          <div className='footer-social'>
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
      </div>
    </section>
  )
}

export default Footer
