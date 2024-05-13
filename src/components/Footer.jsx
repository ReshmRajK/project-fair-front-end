import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className=' mt-5 shadow'>

      <div style={{ height: '300px' }} className='container w-100 mt-5'>
        <div className="footer-content d-flex justify-content-evenly flex-wrap ">

          <div style={{ width: '400px' }} className="media mt-3">
            <h5 className='d-flex'> <i className="fa-solid fa-hands-holding me-2"></i>Project Fair</h5>
            <p style={{ textAlign: 'justify' }}>Designed and build with all the love in the world by the
              Bootstrap team with the help of our contributor.</p>
            <span>Code licensed MIT, docs CC By 3.0.</span>
            <span>Currently v5.3.2.</span>
          </div>

          <div className="links d-flex flex-column mt-3">
            <h5>Links</h5>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
            <Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
          </div>

          <div className="guides d-flex flex-column mt-3">
            <h5>Guides</h5>
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >React Js</a>
            <a href="https://reactrouter.com/en/main" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >React Routing</a>
            <a href="https://react-bootstrap.github.io/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >React Bootstrap</a>
          </div>

          <div className="contact mt-3">
            <h5>Contact Us</h5>
            <div className="d-flex">
              <input type="search" className='form-control' placeholder='Email Id Please ' />
              <button className='btn btn-info ms-1 '><i className="text-warning fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                <i className="fa-brands fa-twitter "></i></a>

              <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                <i className="fa-brands fa-instagram"></i></a>

              <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                <i className="fa-brands fa-facebook"></i></a>

              <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                <i className="fa-brands fa-linkedin"></i></a>

              <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                <i className="fa-brands fa-github"></i></a>

              <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                <i className="fa-solid fa-phone"></i></a>
            </div>

          </div>

        </div>
        <p className='text-center mt-5'>Copyright &copy; 2024 ECart . Built with React.</p>

      </div>
    </div>
  )
}

export default Footer