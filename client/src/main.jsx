import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route,Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import { loginApi } from './api/users.api.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'



const queryClient = new QueryClient()





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout />}>
      {/* <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={
      <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute>} />
        <Route path='/test' element={<Sidebar />}/> */}
    </Route>
  )
);






ReactDOM.createRoot(document.getElementById('root')).render(

  

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  
)
