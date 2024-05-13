import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/upload.webp'


function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn'><i className="fa-solid fa-plus me-1"></i>Add New</button>

    <Modal  size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row d-flex justify-content-between">
          <div className="col-lg-4">
            <label>
              <input type="file" style={{display:'none'}} />
              <img className='img-fluid' src={uploadImg} alt="Sorry!!!" />
            </label>
          </div>
          <div className="col-lg-6">
            <input type="text" className='form-control mb-1' placeholder='Project Title' />
            <input type="text" className='form-control mb-1' placeholder='Language used in the project' />
            <input type="text" className='form-control mb-1' placeholder='Project  GITHUB  link' />
            <input type="text" className='form-control mb-1' placeholder='Project  WEBSITE  link' />
          </div>
          <input type="text" className='form-control ' placeholder='Project Overview' />

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add