import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextApi from './Context/ContextApi.jsx'
import TokenAuth from './Context/TokenAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextApi>
     <TokenAuth>
       <BrowserRouter> 
       <App />
       </BrowserRouter>
     </TokenAuth>
   </ContextApi>
  </React.StrictMode>,
)
