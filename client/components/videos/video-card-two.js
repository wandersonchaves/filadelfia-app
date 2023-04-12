import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Container, Row, Col } from 'react-bootstrap'

// import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
// import videoImage from "../../assets/images/resources/video-1-1.png";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <section className='video-card-two'>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='L61p2uyiMSo'
        onClose={() => setOpen(false)}
      />
      <Container>
        <div
          className='inner-container'
          // style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className='align-items-center'>
            <Col lg={3}>
              <div className='video-card-two__box'>
                {/* <img src={videoImage} alt="" /> */}
                <span
                  className='video-card-two__box-btn video-popup'
                  onClick={() => setOpen(true)}
                >
                  <i className='fa fa-play'></i>
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <h3>Somos ogranização sem fins lucrativos em todo o mundo.</h3>
            </Col>
            <Col lg={5}>
              <p>
                Lorem ipsum é simplesmente um texto fictício da impressão e tipo
                de composição indústria.Você fez o Google Research, que funciona
                tudo tempo.{' '}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default VideoCardTwo
