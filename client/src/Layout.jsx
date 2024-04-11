import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import EmptyComponent from './components/EmptyComponent'
import Tilevideo from './components/Tilevideo'
import Listvideo from './components/Listvideo'
import MyChannel from './components/MyChannel'
import MyChannelHeader from './components/MyChannelHeader'
import MyEmptyComponent from './components/MyEmptyComponent'

function Layout() {
  return (
    <div className="h-screen overflow-y-auto bg-white text-black">
      <Navbar />
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <Sidebar />
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
          <MyChannel />
          
        </section>
      </div>


    </div>
  )
}

export default Layout