import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// import causeImage1 from "../../assets/images/causes/cause-d-1-1.jpg";
// import comment1 from "../../assets/images/blog/comment-1-1.jpg";
// import comment2 from "../../assets/images/blog/comment-1-2.jpg";
// import organizer1 from "../../assets/images/causes/organizer-1-1.jpg";
// import donor1 from "../../assets/images/causes/donor-1-1.jpg";
// import donor2 from "../../assets/images/causes/donor-1-2.jpg";

const CauseContent = () => {
  return (
    <section className='cause-details blog-details  pt-120 pb-40'>
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div className='cause-details__content'>
              <div className='cause-card'>
                <div className='cause-card__inner'>
                  <div className='cause-card__image'>
                    {/* <img src={causeImage1} alt="" /> */}
                  </div>
                  <div className='cause-card__content'>
                    <div className='cause-card__top'>
                      <div className='cause-card__progress'>
                        <span
                          style={{ width: `66%` }}
                          className=' cardProgress'
                        >
                          <b>
                            <i>66</i>%
                          </b>
                        </span>
                      </div>
                      <div className='cause-card__goals'>
                        <p>
                          <strong>Criada:</strong> $25,270{' '}
                        </p>
                        <p>
                          <strong> Objetivo: </strong> $ 30.000{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Nossa doação é esperança para crianças pobres</h3>
              <p>
                Existem muitas variações de passagens de Lorem ipsum
                disponíveis, Mas a maioria sofreu alteração de alguma forma, por
                humor injetado, ou palavras randomizadas que não parecem nem
                mesmo um pouco crível.Se você vai usar uma passagem de Lorem
                Ipsum, você precisa ter certeza de que não há nada embaraçoso
                escondido no meio do texto. {''}
              </p>
              <p>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Lorem ipsum tem sido o manequim padrão
                do setor texto desde os anos 1500, quando uma impressora
                desconhecida tomou uma cozinha do tipo e o embaralhou para fazer
                um livro de amostras de tipo.Tem sobreviveu não apenas a cinco
                séculos, mas também o salto em Tipotamento eletrônico,
                permanecendo essencialmente inalterado.Era Popularizado na
                década de 1960 com o lançamento de folhas de lenças contendo
                passagens de Lorem ipsum e, mais recentemente, com o desktop
                Publicação de software como.
              </p>
              <p>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Lorem ipsum tem sido o manequim padrão
                do setor texto desde os anos 1500, quando uma impressora
                desconhecida tomou uma cozinha do tipo e o embaralhou para fazer
                um livro de espécimes de tipo. {''}
              </p>
              <div className='cause-card__bottom'>
                <a href='cause-details.html' className='thm-btn dynamic-radius'>
                  DOE agora{' '}
                </a>

                <a href='#' className='cause-card__share'>
                  <i className='azino-icon-share'></i>
                </a>
              </div>
              <div className='cause-details__presentations'>
                <i className='fa fa-file-pdf'></i>
                <h3>Nossa apresentação</h3>
                <a href='#' className='thm-btn dynamic-radius'>
                  download
                </a>
              </div>
            </div>
            <h3 className='blog-details__title'>Comentários</h3>
            <div className='comment-one'>
              <div className='comment-one__single'>
                {/* <img src={comment1} alt="" /> */}
                <h3>Jessica Brown</h3>
                <p className='comment-one__date'>20 de maio de 2020.16:00</p>
                <p>
                  Lorem ipsum é simplesmente um texto livre do Dummy do
                  disponível Impressão e tipografia foram o texto dummy padrão
                  da indústria sempre sinceramente condimentum purus.
                </p>
                <a href='#' className='thm-btn dynamic-radius'>
                  Responder
                </a>
              </div>
              <div className='comment-one__single'>
                {/* <img src={comment2} alt="" /> */}
                <h3>Jessica Brown</h3>
                <p className='comment-one__date'>20 de maio de 2020.16:00</p>
                <p>
                  Lorem ipsum é simplesmente um texto livre do Dummy do
                  disponível Impressão e tipografia foram o texto dummy padrão
                  da indústria sempre sinceramente condimentum purus.
                </p>
                <a href='#' className='thm-btn dynamic-radius'>
                  Responder
                </a>
              </div>
            </div>
            <h3 className='blog-details__title'>Deixe um comentário</h3>
            <form
              action='#'
              className='contact-form-validated contact-page__form form-one mb-80'
            >
              <div className='form-group'>
                <div className='form-control'>
                  <input type='text' name='name' placeholder='Seu nome' />
                </div>
                <div className='form-control'>
                  <input
                    type='text'
                    name='email'
                    placeholder='Endereço de email'
                  />
                </div>
                <div className='form-control'>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Número de telefone'
                  />
                </div>
                <div className='form-control'>
                  <input type='text' name='subject' placeholder='Assunto' />
                </div>
                <div className='form-control form-control-full'>
                  <textarea
                    name='message'
                    placeholder='Escreve uma mensagem'
                  ></textarea>
                </div>
                <div className='form-control form-control-full'>
                  <button type='submit' className='thm-btn dynamic-radius'>
                    enviar comentário
                  </button>
                </div>
              </div>
            </form>
            <div className='result'></div>
          </Col>
          <Col md={12} lg={4}>
            <div className='cause-details__sidebar'>
              <div className='cause-details__organizer'>
                {/* <img src={organizer1} alt="" /> */}
                <p>Criado em 20 de maio de 2020</p>
                <h3>
                  Organizador: <strong> Sarah Albert </strong>{' '}
                </h3>
                <ul className='list-unstyled cause-details__organizer-list'>
                  <li>
                    <i className='fa fa-tag'></i>
                    <a href='#'>Educação</a>
                  </li>
                  <li>
                    <i className='fa fa-map-marker-alt'></i>
                    <a href='#'> Nova York, EUA </a>{' '}
                  </li>
                </ul>
              </div>
              <div className='cause-details__donations'>
                <h4 className='cause-details__donations-title'>Doações</h4>
                <ul className='list-unstyled cause-details__donations-list'>
                  <li>
                    {/* <img src={donor1} alt="" /> */}
                    <p> $ 20 </p>{' '}
                    <h3>
                      David Marks <span> 3 horas atrás </span>{' '}
                    </h3>
                    <span>Deus te abençoe querido</span>
                  </li>
                  <li>
                    {/* <img src={donor2} alt="" /> */}
                    <p>$20</p>
                    <h3>
                      David Marks <span> 3 horas atrás </span>{' '}
                    </h3>
                    <span>Deus te abençoe querido</span>
                  </li>
                  <li>
                    {/* <img src={donor1} className="anonymus" alt="" /> */}
                    <p>$20</p>
                    <h3>
                      Anonymus <span> 3 horas atrás </span>{' '}
                    </h3>
                    <span>Deus te abençoe querido</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CauseContent
