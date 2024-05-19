import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { getAllProjectsApi } from '../services/allAPI'


function Projects() {

  //state for to hold search
  const [searchKey, setSearchKey] = useState('')

  //state for to hold all projects
  const [allProjects, setAllProjects] = useState([])
  console.log(allProjects);

  useEffect(() => {
    getAllProjects()
  }, [searchKey])

  //fun for get all projects
  const getAllProjects = async () => {

    //to get token for view all uploaded projects
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllProjectsApi(searchKey, reqHeader)
      // console.log(result);
      if (result.status == 200) {
        setAllProjects(result.data)
      }

    }
    catch (err) {
      console.log(err);
    }

  }
  return (
    <>
      <Header />
      <div style={{ marginTop: '150px' }} className='container-fluid'>
        <div className='d-flex justify-content-between'>
          <h1>All Projects</h1>
          <input onChange={(e) => setSearchKey(e.target.value)} className='form-control w-50' type="text" placeholder='Search here by language used!!!' />
        </div>

        <div className="row mt-5">
          {
            allProjects?.length > 0 ? allProjects?.map(project => (
              <div key={project} className="col-lg-4 mt-2">
                <ProjectCard displayData={project} />
              </div>
            ))
              : <div className="text-danger text-center fw-bolder m-5"><h1>Project Not Found...!!!</h1></div>
          }
        </div>
      </div>
    </>
  )
}

export default Projects