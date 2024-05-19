import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import userProfile from '../assets/userProfile.png'
import { SERVER_URL } from '../services/serverUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfileApi } from '../services/allAPI';


function Profile() {

  //state for to generate URL when upload user image
  const [preview, setPreview] = useState("")

  //state for hold existing user image
  const [existingImage, setExistingImage] = useState("")

  //state for to hold user details
  const [userDetails, setUserDetails] = useState({
    userName: '', email: '', password: '',
    github: '', linkedin: '', profileImage: ''
  })
  console.log(userDetails);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const existingUserDetails = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserDetails({
        ...userDetails, userName: existingUserDetails.userName, email: existingUserDetails.email,
        password: existingUserDetails.password, github: existingUserDetails.github, linkedin: existingUserDetails.linkedin
      })
      setExistingImage(existingUserDetails.profile)
    }

  }, [open])

  //side effect for to show user profile image when uploading an image
  useEffect(() => {
    if (userDetails.profileImage) {
      setPreview(URL.createObjectURL(userDetails.profileImage))
    }
    else {
      setPreview("")
    }

  }, [userDetails.profileImage])

  //fun for update
  const handleUserProfile = async () => {
    const { userName, email, password, github, linkedin, profileImage } = userDetails

    if (!github || !linkedin) {
      toast.warning("Please fill the form completely...!!!")
    }
    else {
      const reqBody = new FormData
      reqBody.append("userName", userName)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      preview ? reqBody.append("profileImage", profileImage) : reqBody.append("profileImage", existingImage)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          //the way of token given to server
          "Authorization": `Bearer ${token}`
        }
        //api call
        try {
          const result = await updateProfileApi(reqBody, reqHeader)
          if (result.status == 200) {
            setOpen(!open)

            //The updated user profile details must be stored in sessionStorage,
            //(SessionStorage Must be updated with new profile details)
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          }
          else {
            console.log(result);
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
      <div className="d-flex justify-content-evenly">
        <h3 className='text-warning'>User Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn btn-warning fw-bolder'><i className="fa-solid fa-angle-down"></i></button>
      </div>

      <Collapse in={open}>
        <div className='row justify-content-center rounded shadow p-3' id="example-collapse-text">
          <label className='text-center'>
            <input onChange={(e) => setUserDetails({ ...userDetails, profileImage: e.target.files[0] })} type="file" style={{ display: 'none' }} />

            {existingImage == "" ?
              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : userProfile} alt="Sorry!!!" />

              : <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `${SERVER_URL}/uploads/${existingImage}`} alt="Sorry!!!" />
            }

          </label>
          <div className='mb-2'>
            <input value={userDetails.github} onChange={(e) => setUserDetails({ ...userDetails, github: e.target.value })} type="text" className='form-control' placeholder='GitHub URL' />
          </div>
          <div className='mb-2'>
            <input value={userDetails.linkedin} onChange={(e) => setUserDetails({ ...userDetails, linkedin: e.target.value })} type="text" className='form-control' placeholder='LinkedIn URL' />
          </div>
          <div className="d-grid">
            <button onClick={handleUserProfile} className='btn btn-warning'>Update Profile</button>
          </div>
        </div>
      </Collapse>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}
export default Profile