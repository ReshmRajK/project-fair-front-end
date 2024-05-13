import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} style={{ width: '20rem' }} className="shadow btn rounded">
        <Card.Img height={'200px'} variant="top" src="https://cdni.iconscout.com/illustration/premium/thumb/admin-panel-4438901-3726711.png" />
        <Card.Body className='text-center'>
          <Card.Title>Project Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASUwDrs2Xr4betyoDOYfANPCZaN393CylQJJplg1hMQBRbDJkdtUKcbtez5cktUgzF64&usqp=CAU" alt="Sorry!!!" />
            </div>
            <div className="col-lg-6">
              <h3>Project Title</h3>
              <h6><span>Languages Used</span> : HTML,CSS,JS</h6>
              <p style={{ textAlign: 'justify' }}><span className='fw-bolder'>Description</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aspernatur vero sed quisquam ut minima nam eum reprehenderit repudiandae? Repellendus dignissimos quam cumque distinctio ipsam possimus voluptatum ipsa voluptas pariatur!</p>
            </div>
          </div>
          {/* <hr /> */}

          <div className="float-start">
          <a href='https://github.com/' target='_blank' className='btn btn-secondary me-3' onClick={handleClose}>
          <i className="fa-brands fa-github" ></i>
          </a>
          <a href='https://menulistchoosen.netlify.app' target='_blank' className='btn btn-secondary' onClick={handleClose}>
          <i className="fa-solid fa-link"></i>
          </a>
          </div>

        </Modal.Body>
      </Modal>
    </>


  )
}

export default ProjectCard