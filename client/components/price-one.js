import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// import heart from "../assets/images/shapes/heart-2-1.png";
// import priceBox from "../assets/images/resources/price-box-1-1.jpg";
const PRICE_ONE_DATA = [
  {
    title: 'Pacote de prata',
    icon: 'fa fa-paper-plane',
    extraClassName: '',
    price: '$ 30,00',
    options: [
      {
        text: 'O texto grátis vai aqui',
      },
      {
        text: 'Escreva aqui qualquer coisa',
      },
      {
        text: 'Acima mencionar isso',
      },
      {
        text: 'Diga mais uma vez',
      },
    ],
    button: {
      link: '#',
      label: 'Escolha o plano',
    },
  },
  {
    title: 'Pacote de ouro',
    icon: 'fa fa-plane',
    extraClassName: 'gold',
    price: '$ 60,00',
    options: [
      {
        text: 'O texto grátis vai aqui',
      },
      {
        text: 'Escreva aqui qualquer coisa',
      },
      {
        text: 'Acima mencionar isso',
      },
      {
        text: 'Diga mais uma vez',
      },
    ],
    button: {
      link: '#',
      label: 'Escolha o plano',
    },
  },
]
const PriceOne = () => {
  return (
    <section className='price-one'>
      <Container>
        <Row>
          <Col xl={5}>
            <div className='price-one__main'>
              <div className='block-title'>
                <p>
                  {/* <img src={heart} width="15" alt="" /> */}
                  Causas populares
                </p>
                <h3>
                  Doar para a caridade Causas <br /> em todo o mundo.
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
                Diam não tummo nibh euísmo tincidunt ut laoreet dolore magna
                Aliquam Erat Volutpat. {''}
              </p>
              <div className='price-one__image-box'>
                {/* <img src={priceBox} alt="" /> */}
                <div className='price-one__image-box-content'>
                  <h3>
                    <i className='fa fa-check'></i> Plataforma de captação de
                    recursos
                  </h3>
                  <p>
                    Lorem ipsum.Microondas grávida NIBH ou pesquisa de autores
                    ao ar livre. Anean Cuidado, Lorem é simplesmente um texto
                    livre quis bebida.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <Row>
              {PRICE_ONE_DATA.map(
                (
                  { title, icon, price, extraClassName, options, button },
                  index
                ) => (
                  <Col md={6} key={`price-one-key-${index}`}>
                    <div className={`price-one__single ${extraClassName}`}>
                      <i className={icon}></i>
                      <p>{title}</p>
                      <h3>{price}</h3>
                      <ul className='price-one__list'>
                        {options.map(({ text }, index) => (
                          <li key={`price-one-list-key-${index}`}>{text}</li>
                        ))}
                      </ul>
                      <Link legacyBehavior href={button.link}>
                        <a className='thm-btn dynamic-radius'>{button.label}</a>
                      </Link>
                    </div>
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PriceOne
