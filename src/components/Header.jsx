import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../Context/TokenAuth'


function Header({ insideHeader }) {

  const navigate = useNavigate()

  //context for authentication
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthContext)


  const handleLogOut = () => {

    //Remove existingUser and token from sessionStorage when click on LogOut button
    sessionStorage.clear()
    setIsAuthorized(false)
    navigate('/')
  }
  return (

    <Navbar style={{ zIndex: '1' }} className="card shadow top-0 position-fixed w-100">
      <Container>
        <Navbar.Brand >
          <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder'>
            <i className="fa-solid fa-hands-holding me-2"></i>
            Project Fair
          </Link>
        </Navbar.Brand>

        {insideHeader &&
          <div className='ms-auto'>
            <button onClick={handleLogOut} className='btn btn-link'>LogOut <i className="fa-solid fa-arrow-right ms-1"></i></button>
          </div>
        }

      </Container>
    </Navbar>
  )
}

export default Header