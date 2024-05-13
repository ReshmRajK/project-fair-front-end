import React from 'react'
import Edit from '../components/Edit'
import Add from './Add'

function View() {
  return (
    <>
      <div className='d-flex justify-content-between w-100'>
        <h2 className='text-warning'>All Projects</h2>
        <div><Add/></div>
      </div>

      <div className='mt-4'>
        <div className="d-flex justify-content-between border rounded p-1">
          <h3>Project Title</h3>
          <div className="d-flex">
            <div><Edit/></div>
            <div className='btn'><a href="" target='_blank'><i className="fa-brands fa-github"></i></a></div>
            <button className='btn'><i className="fa-solid fa-trash-can text-danger"></i></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default View