import React, { useContext, useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../assets/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../services/allAPI';
import { tokenAuthContext } from '../Context/TokenAuth';

function Auth({ insideRegister }) {

  //context for authentication
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthContext)

  const navigate = useNavigate()

  const [userInputs, setUserInputs] = useState({
    userName: '', email: '', password: ''
  })
  // console.log(userInputs);

  //register
  const handleRegister = async (e) => {
    e.preventDefault()
    if (userInputs.userName && userInputs.email && userInputs.password) {
      //api call
      try {
        const result = await registerApi(userInputs)
        // console.log(result);
        if (result.status == 200) {
          toast.success(`Welcome ${result.data.userName}... Please Login to Explore Our Website`)
          setUserInputs({ userName: '', email: '', password: '' })

          setTimeout(() => {
            navigate('/login')
          }, 2000)

        }
        else {
          toast.error(result.response.data)
          setTimeout(() => {
            setUserInputs({ userName: '', email: '', password: '' })
          }, 2000)
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    else {
      toast.warning('Please fill the form completely!!!')
    }
  }

  ///login
  const handleLogin = async (e) => {
    e.preventDefault()
    if (userInputs.email && userInputs.password) {
      try {
        const result = await loginApi(userInputs)

        // console.log(result);
        if (result.status == 200) {

          //store existing user and token
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token", result.data.token)

          //update the context authentication value 
          setIsAuthorized(true)

          toast.warning(`Welcome ${result.data.existingUser.userName}...!!!`)
          setUserInputs({ email: '', password: '' })

          setTimeout(() => {
            navigate('/')
          }, 2000)
        }
        else {
          toast.error(result.response.data)
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    else {
      toast.warning('Please fill the form completely!!!')
    }

  }

  return (
    <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75 mt-5">
        <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder '>
          <i className="fa-solid fa-arrow-left me-1"></i>Back To Home</Link>
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='img-fluid' src={LoginImg} alt="Sorry!!!" />
            </div>
            <div className="col-lg-6">
              <h1 className='fw-bolder mt-2 '><i className="fa-solid fa-hands-holding"></i> Project Fair</h1>
              <h5>Sign {insideRegister ? "Up" : "In"} to your account</h5>

              <Form>

                {
                  insideRegister &&
                  <FloatingLabel
                    controlId="floatingInputName"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control value={userInputs.userName} onChange={(e) => setUserInputs({ ...userInputs, userName: e.target.value })}
                      type="text" placeholder="Username" />
                  </FloatingLabel>
                }
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={userInputs.email} onChange={(e) => setUserInputs({ ...userInputs, email: e.target.value })}
                    type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userInputs.password} onChange={(e) => setUserInputs({ ...userInputs, password: e.target.value })}
                    type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                    <div className='mt-3'>
                      <button onClick={handleRegister} className='btn btn-primary'>Register</button>
                      <p className='mt-1'>Already have an Account ? Click Here to <Link to={'/login'} className='text-info'> Login</Link></p>
                    </div>

                    : <div className='mt-3'>
                      <button onClick={handleLogin} className='btn btn-primary'>Login</button>
                      <p className='mt-1'>Already have an Account ? Click Here to <Link to={'/register'} className='text-info'> Register</Link></p>
                    </div>

                }

              </Form>

            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Auth