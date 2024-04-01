import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import loginApi from './api/users.api'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Register />}>
      {/* <Route path='' element={} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)

loginApi();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
