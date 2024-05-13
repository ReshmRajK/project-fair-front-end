import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginImg from '../assets/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ insideRegister }) {

  const [userInputs,setUserInputs]=useState({
    userName:'',email:'',password:''
  })
  console.log(userInputs);

  const handleRegister=(e)=>{
    e.preventDefault()
    if(userInputs.userName && userInputs.email && userInputs.password){
      //api call
    }
    else{
      toast.warning('Please fill the form completely!!!')
    }
  }

  return (
    <div style={{ width: '100%'}} className='d-flex justify-content-center align-items-center'>
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
                  <Form.Control value={userInputs.userName} onChange={(e)=>setUserInputs({...userInputs,userName:e.target.value})} 
                  type="text" placeholder="Username" />
                </FloatingLabel>
                }
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={userInputs.email} onChange={(e)=>setUserInputs({...userInputs,email:e.target.value})}
                   type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userInputs.password} onChange={(e)=>setUserInputs({...userInputs,password:e.target.value})}
                   type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                  <div className='mt-3'>
                    <button onClick={handleRegister} className='btn btn-primary'>Register</button>
                    <p className='mt-1'>Already have an Account ? Click Here to <Link to={'/login'} className='text-info'> Login</Link></p>
                  </div>

                  :<div className='mt-3'>
                  <button className='btn btn-primary'>Login</button>
                  <p className='mt-1'>Already have an Account ? Click Here to <Link to={'/register'} className='text-info'> Register</Link></p>
                </div>

                }

              </Form>

            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </div>
  )
}

export default Auth