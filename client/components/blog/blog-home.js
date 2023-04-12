import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import BlockTitle from '../block-title'
import BlogCard from './blog-card'
// import blogImage1 from "../../assets/images/blog/blog-1-1.jpg";
// import blogImage2 from "../../assets/images/blog/blog-1-2.jpg";
// import blogImage3 from "../../assets/images/blog/blog-1-3.jpg";

const BLOG_DATA = [
  {
    // image: blogImage1,
    title: 'Nossa doação é esperança para crianças pobres',
    date: '20 de maio',
    text: 'Lorem ipsum é simplesmente um texto livre usado por copytyping refrescante.',
    link: '/news-details',
    commentCount: '2 comentários',
    author: 'admin',
  },
  {
    // image: blogImage2,
    title: 'Nossa doação é esperança para crianças pobres',
    date: '20 de maio',
    text: 'Lorem ipsum é simplesmente um texto livre usado por copytyping refrescante.',
    link: '/news-details',
    commentCount: '2 comentários',
    author: 'admin',
  },
  {
    // image: blogImage3,
    title: 'Nossa doação é esperança para crianças pobres',
    date: '20 de maio',
    text: 'Lorem ipsum é simplesmente um texto livre usado por copytyping refrescante.',
    link: '/news-details',
    commentCount: '2 comentários',
    author: 'admin',
  },
]

const BlogHome = () => {
  const blogCarouselOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  }
  return (
    <section className='news-page news-home pt-120 pb-120'>
      <Container>
        <Row className='align-items-start align-items-md-center flex-column flex-md-row mb-60'>
          <Col lg={7}>
            <BlockTitle
              title={`Latest news & articles \n directly from the blog.`}
              tagLine='Blog Posts'
            />
          </Col>
          <Col lg={5} className='d-flex'>
            <div className='my-auto'>
              <p className='block-text pr-10 mb-0'>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Você fez o Google Research, que funciona
                tudo tempo.{' '}
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...blogCarouselOptions}>
          {BLOG_DATA.map(
            (
              { image, title, date, text, link, commentCount, author },
              index
            ) => (
              <SwiperSlide key={index}>
                <BlogCard
                  image={image}
                  title={title}
                  date={date}
                  text={text}
                  link={link}
                  commentCount={commentCount}
                  author={author}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  )
}

export default BlogHome
