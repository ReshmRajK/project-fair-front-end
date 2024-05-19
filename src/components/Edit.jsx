import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/upload.webp'
import { editProjectsApi } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVER_URL } from '../services/serverUrl';
import { editResponseContext } from '../Context/ContextApi';




function Edit({ project }) {

  //to get the edit context
  const { editResponse, setEditResponse } = useContext(editResponseContext)

  //state for to store image url
  const [preview, setPreview] = useState("")

  //state for to store input field value
  const [projectData, setProjectData] = useState({
    id: project?._id, title: project?.title, language: project?.language, overview: project?.overview,
    github: project?.github, website: project?.website, projectImage: ""
  })


  const [show, setShow] = useState(false);

  useEffect(() => {
    if (projectData.projectImage) {
      setPreview(URL.createObjectURL(projectData.projectImage))
    }
    else {
      setPreview("")
    }
  }, [projectData.projectImage])

  const handleClose = () => {
    setShow(false);

    //when click on cancel button on modal,all the field become empty
    setProjectData({
      id: project?._id, title: project?.title, language: project?.language, overview: project?.overview,
      github: project?.github, website: project?.website, projectImage: ""
    })
  }

  const handleShow = () => {
    setShow(true);
    //This is used for to show the edited content on modal box when again click on the same modal for again update the content in the modal
    setProjectData({
      id: project?._id, title: project?.title, language: project?.language, overview: project?.overview,
      github: project?.github, website: project?.website, projectImage: ""
    })
  }


  //fun for edit
  const handleUpdateProject = async () => {

    const { title, language, overview, github, website, projectImage } = projectData

    if (!title || !language || !overview || !github || !website) {
      toast.warning("Please fill the form completely...!!!")
    }
    else {

      const reqBody = new FormData()

      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", project.projectImage)

      //get token only authorised user can do the below task
      const token = sessionStorage.getItem("token")

      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          //the way of token given to server
          "Authorization": `Bearer ${token}`
        }

        //api call
        try {
          const result = await editProjectsApi(projectData.id, reqBody, reqHeader)
          // console.log(result);
          if (result.status == 200) {

            handleClose()
            //pass the response to view
            setEditResponse(result)

          }
          else {
            console.log(result.response);
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
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-edit"></i></button>

      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-between">
            <div className="col-lg-4">
              <label>
                <input onChange={e => setProjectData({ ...projectData, projectImage: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                <img src={preview ? preview : `${SERVER_URL}/uploads/${project?.projectImage}`} alt="project?.title" className='img-fluid' src={uploadImg} />
              </label>
            </div>
            <div className="col-lg-6">
              <input value={projectData.title} onChange={e => setProjectData({ ...projectData, title: e.target.value })} type="text" className='form-control mb-1' placeholder='Project Title' />
              <input value={projectData.language} onChange={e => setProjectData({ ...projectData, language: e.target.value })} type="text" className='form-control mb-1' placeholder='Language used in the project' />
              <input value={projectData.github} onChange={e => setProjectData({ ...projectData, github: e.target.value })} type="text" className='form-control mb-1' placeholder='Project  GITHUB  link' />
              <input value={projectData.website} onChange={e => setProjectData({ ...projectData, website: e.target.value })} type="text" className='form-control mb-1' placeholder='Project  WEBSITE  link' />
            </div>
            <input value={projectData.overview} onChange={e => setProjectData({ ...projectData, overview: e.target.value })} type="text" className='form-control ' placeholder='Project Overview' />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )

}

export default Edit