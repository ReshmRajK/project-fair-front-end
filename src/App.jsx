import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './Context/TokenAuth'


function App() {

  //using context value for protecting our Dashboard and Projects component
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/dashboard' element={isAuthorized ? <Dashboard /> : <Navigate to={'/login'} />} />
        <Route path='/projects' element={isAuthorized ? <Projects /> : <Navigate to={'/login'} />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
