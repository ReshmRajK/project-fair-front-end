import React from 'react'
import { Link } from 'react-router-dom'
import LandingImage from '../assets/admin.webp'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'



function Home() {
  return (
    <>
      {/* Landing Page */}
      <div style={{ minHeight: '100vh' }} className='w-100 d-flex justify-content-center align-items-center rounded shadow'>
        <div className='container'>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '60px' }}><i className="fa-solid fa-hands-holding"></i> Project Fair</h1>
              <p style={{ textAlign: 'justify' }}>Below is a list of some web development fair project ideas on our site.
                To help you find a topic that can hold your interest, Developer Buddies has also developed the Topic Selection
                Wizard. It will help you focus on an area of science that's best for you without having to read through every
                project one by one!!!</p>
              <Link to={'/login'} className='btn btn-warning'>starts To Explore <i className="fa-solid fa-arrow-right ms-1"></i> </Link>

            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={LandingImage} alt="Sorry!!!" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-5 text-center">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            <div className='me-5 mb-5'>
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <button className='btn btn-link mt-3'>Click Here To View More Projects...</button>
      </div>

      {/* testimony */}
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: '18rem', }}>
            <Card.Body style={{ height: '400px' }}>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'70px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgin6w4aYEC7cCO5SB_iWjfT200kfpzMp7ID4hhfGxSHQ2bCanuxMKbEh1e_mu1aEeLMg&usqp=CAU" alt="Sorry!!!" />
                <span>User Name</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p style={{ textAlign: 'justify' }} className='mt-2'>
                  Lorem Ipsum is basically just dummy text that is latin. It's a content filler for when you don't
                  really have content to put in there yet. It tends to help you make sure you have your font how you
                  want it, such as size, color, line height, font-family, etc.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body style={{ height: '400px' }}>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'70px'} height={'60px'} className='rounded-circle img-fluid' src="https://storage.needpix.com/rsynced_images/user-307993_1280.png" alt="Sorry!!!" />
                <span>User Name</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p style={{ textAlign: 'justify' }} className='mt-2'>
                  Lorem Ipsum is basically just dummy text that is latin. It's a content filler for when you don't
                  really have content to put in there yet. It tends to help you make sure you have your font how you
                  want it, such as size, color, line height, font-family, etc.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body style={{ height: '400px' }}>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'70px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVi9cbmMkUabLiF_3kfI94qngwPIM4gnrztEUv6Hopw&s" alt="Sorry!!!" />
                <span>User Name</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p style={{ textAlign: 'justify' }} className='mt-2'>
                  Lorem Ipsum is basically just dummy text that is latin. It's a content filler for when you don't
                  really have content to put in there yet. It tends to help you make sure you have your font how you
                  want it, such as size, color, line height, font-family, etc.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </>
  )
}

export default Home