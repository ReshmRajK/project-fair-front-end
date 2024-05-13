import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'


function Projects() {
  return (
    <>
  <Header/>
  <div style={{marginTop:'150px'}} className='container-fluid'>
    <div className='d-flex justify-content-between'>
      <h1>All Projects</h1>
      <input className='form-control w-50' type="text" placeholder='Search here by language used!!!' />
    </div>

    <div className="row mt-5">
      <div className="col-lg-4">
        <ProjectCard/>
      </div>
    </div>
  </div>
    </>
  )
}

export default Projects