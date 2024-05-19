import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/upload.webp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectApi } from '../services/allAPI';
import { addResponseContext } from '../Context/ContextApi';


function Add() {

  //get the context from ContextApi component
  const { addResponse, setAddResponse } = useContext(addResponseContext)

  //state for to store image url
  const [preview, setPreview] = useState("")

  //state for to store input field value
  const [projectDetails, setProjectDetails] = useState({
    title: "", language: "", overview: "",
    github: "", website: "", projectImage: ""
  })
  // console.log(projectDetails);

  //state for only upload specified file type images
  const [imageFileStatus, setImageFileStatus] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);

    //when click on cancel button on modal,all the field become empty
    setProjectDetails({
      title: "", language: "", overview: "",
      github: "", website: "", projectImage: ""
    })
  }
  const handleShow = () => setShow(true);

  //for checking file type
  useEffect(() => {
    if (projectDetails.projectImage.type == "image/png" || projectDetails.projectImage.type == "image/png"
      || projectDetails.projectImage.type == "image/png") {
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
    else {
      setPreview(uploadImg)
      setImageFileStatus(false)
      setProjectDetails({ ...projectDetails, projectImage: "" })
    }
  }, [projectDetails.projectImage])

  //upload project
  const handleUploadProject = async () => {

    const { title, language, overview, github, website, projectImage } = projectDetails

    if (!title || !language || !overview || !github || !website || !projectImage) {
      toast.warning("Please fill the form completely...!!!")
    }
    else {

      const reqBody = new FormData()

      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("projectImage", projectImage)

      //get token only authorised user can do the below task
      const token = sessionStorage.getItem("token")

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          //the way of token given to server
          "Authorization": `Bearer ${token}`
        }

        //api call
        try {
          const result = await addProjectApi(reqBody, reqHeader)
          if (result.status == 200) {
            // toast.success(`${result.data.title} has successfully added...!!!`)

            //to call context state method,which is need in view component
            setAddResponse(result)
            handleClose()
          }
          else {
            toast.warning(result.response.data)
          }
        }
        catch (err) {
          console.log(err);

        }
      }

    }

  }

  return (
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-plus me-1"></i>Add New</button>

      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-4">
              <label>
                <input onChange={(e) => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })}
                  type="file" style={{ display: 'none' }} />
                <img className='img-fluid' src={preview} alt="Sorry!!!" />
              </label>

              {!imageFileStatus &&
                <div className="text-danger">Upload only the following file type ( png,jpg,jpeg ) here...!!!</div>
              }
            </div>
            <div className="col-lg-6">
              <input value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })}
                type="text" className='form-control mb-1' placeholder='Project Title' />
              <input value={projectDetails.language} onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })}
                type="text" className='form-control mb-1' placeholder='Language used in the project' />
              <input value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })}
                type="text" className='form-control mb-1' placeholder='Project  GITHUB  link' />
              <input value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })}
                type="text" className='form-control mb-1' placeholder='Project  WEBSITE  link' />
            </div>
            <input value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} type="text" className='form-control ' placeholder='Project Overview' />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUploadProject} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Add