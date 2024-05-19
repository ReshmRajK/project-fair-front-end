import React, { useContext, useEffect, useState } from 'react'
import Edit from '../components/Edit'
import Add from './Add'
import { getUserProjectsApi, removeProjectsApi } from '../services/allAPI';
import { addResponseContext, editResponseContext } from '../Context/ContextApi';

function View() {

  //to get context of add response
  const { addResponse, setAddResponse } = useContext(addResponseContext)

  //to get context of edit response
  const { editResponse, setEditResponse } = useContext(editResponseContext)


  //state for to hold user projects
  const [userProjects, setUserProjects] = useState([])
  // console.log(userProjects);

  useEffect(() => {
    getUserProjects()
  }, [addResponse, editResponse])

  const getUserProjects = async () => {

    //to get token for view all user projects
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getUserProjectsApi(reqHeader)
      // console.log(result);
      if (result.status == 200) {
        setUserProjects(result.data)
      }

    }
    catch (err) {
      console.log(err);
    }

  }

  //fun for delete

  const handleRemove = async (projectId) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        //the way of token given to server
        "Authorization": `Bearer ${token}`
      }

      //api call
      const result = await removeProjectsApi(projectId, reqHeader)
      if (result.status == 200) {
        getUserProjects()
      }
      else {
        console.log(result);
      }
    }


  }


  return (
    <>
      <div className='d-flex justify-content-between w-100'>
        <h2 className='text-warning'>All Projects</h2>
        <div><Add /></div>
      </div>

      <div className='mt-4'>

        {userProjects?.length > 0 ? userProjects?.map(project => (
          <div key={project} className="d-flex justify-content-between border rounded p-1 mt-2">
            <h3>{project?.title}</h3>
            <div className="d-flex">
              <div><Edit project={project} /></div>
              <div className='btn'><a href={project?.github} target='_blank'><i className="fa-brands fa-github"></i></a></div>
              <button onClick={() => handleRemove(project?._id)} className='btn'><i className="fa-solid fa-trash-can text-danger"></i></button>
            </div>
          </div>

        ))
          : <div className="text-danger text-center m-5 fw-bolder">No User Project Uploaded Yet...!!!</div>

        }

      </div>
    </>
  )
}

export default View