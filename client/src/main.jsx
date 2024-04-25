import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'

import { loginApi } from './api/users.api.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Dashboard from './components/Dashboard/DashboardHeader1.jsx'
import Navbar from './components/Globals/Navbar.jsx'
import Sidebar from './components/Globals/Sidebar.jsx'
import Tilevideo from './components/Home/Tilevideo.jsx'
import Login from './components/Authentication/Login.jsx'
import Register from './components/Authentication/Register.jsx'
import MyChannel from './pages/MyChannel.jsx'
import DetailVideo from './pages/DetailVideo.jsx'
import Error from './components/Error.jsx'

import LikedVideosPage from './pages/LikedVideoPage.jsx'
import WatchHistoryPage from './pages/WatchHistoryPage.jsx'
import SearchedChannelPage from './pages/SearchedChannelPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'



const queryClient = new QueryClient()





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Tilevideo />,
      },
      {
        path: "mychannel",
        element: (
          <ProtectedRoute>
            <MyChannel />
          </ProtectedRoute>
        ),
      },
      {
        path: "video/:videoId",
        element: <DetailVideo />,
      },
      {
        path : 'MyChannel/liked',
        element : (
          <ProtectedRoute >
            <LikedVideosPage />
            </ProtectedRoute>
        )
      },
      {
        path : 'myChannel/watch-history',
        element : (
          <ProtectedRoute>
            <WatchHistoryPage />
          </ProtectedRoute>
        )
      },{
        path : 'channels/:channelUserName',
        element : (
          <SearchedChannelPage />
        )
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path : "/dashboard",
    element : <ProtectedRoute>
      <DashboardPage />

    </ProtectedRoute>

  },
  {
    path : '*',
    element : <Error />
  },
  
  
]);






ReactDOM.createRoot(document.getElementById('root')).render(

  

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  
)
