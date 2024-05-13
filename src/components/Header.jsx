import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideHeader}) {
  return (
   
       <Navbar style={{zIndex:'1'}} className="card shadow top-0 position-fixed w-100">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'>
          <i className="fa-solid fa-hands-holding me-2"></i> 
            Project Fair
          </Link>          
          </Navbar.Brand>

          { insideHeader &&
            <div className='ms-auto'>
            <button className='btn btn-link'>LogOut <i className="fa-solid fa-arrow-right ms-1"></i></button>
          </div>
          }

        </Container>
      </Navbar>
   )
}

export default Header