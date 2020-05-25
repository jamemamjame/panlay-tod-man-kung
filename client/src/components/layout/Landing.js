import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import _ from 'lodash'
import Contact from './Contact'
import { Container, Row, Col, Card } from 'react-bootstrap'

// images importing
import ImgSlide1 from '../../img/carousel/slide-1.jpg'
import ImgSlide2 from '../../img/carousel/slide-2.jpg'
import ImgSlide3 from '../../img/carousel/slide-3.jpg'
import ImgAboutUs from '../../img/1-about-us.jpg'
import ImgMenu1 from '../../img/menus/card-1.jpg'
import ImgMenu2 from '../../img/menus/card-2.jpg'
import ImgMenu3 from '../../img/menus/card-3.jpg'


const Landing = () => {
  const carousels = [
    { img: ImgSlide1, text: 'กุ้งจ๋า' },
    { img: ImgSlide2, text: 'พี่มาแล้วจ่ะ' },
    { img: ImgSlide3, text: 'ขยับมาใกล้ๆ' },
  ]

  const menus = [
    {
      name: 'Card Title',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      numOrder: 102,
      img: ImgMenu1
    },
    {
      name: 'Card Title',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      numOrder: 80,
      img: ImgMenu2
    },
    {
      name: 'Card Title',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      numOrder: 24,
      img: ImgMenu3
    },
  ]

  return (
    <>
      {/* carousel */}
      <Carousel>
        {
          _.map(carousels, obj => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={obj.img}
                  alt=""
                />
                <Carousel.Caption>
                  <h3>{obj.text}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel>

      {/* about us */}
      <section className="container-fluid px-0">
        <div className="row align-items-center content">
          <div id="about-us" className="col-md-6 order-2 order-md-1">
            <img src={ImgAboutUs} alt="" className="img-fluid"></img>
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>เกี่ยวกับเรา</h2>
                <img src="imgs/lolli_icon.png" alt="" className="d-none d-lg-inline"></img>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                beatae, maiores deserunt
                in voluptatibus
                aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                repellat eveniet quidem
                voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                autem nam ex deserunt debitis
                            eaque ratione! Nobis, quidem assumenda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* menu */}
      <section id="menu">
        <Container>
          <Row float="center">
            {_.map(menus, menu => {
              return (
                <Col md={4}>
                  <Card >
                    <Card.Img variant="top" src={menu.img} />
                    <Card.Body>
                      <Card.Title>{menu.name}</Card.Title>
                      <Card.Text>{menu.desc}</Card.Text>
                      <br/>
                      <Card.Link href="#">{`สั่งไปแล้ว ${menu.numOrder} ครั้ง`}</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
      
      {/* Contact us */}
      <Contact />


    </>
  )
}

Landing.propTypes = {

}

export default Landing
