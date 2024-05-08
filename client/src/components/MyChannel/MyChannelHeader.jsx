import React from 'react'
import { NavLink } from 'react-router-dom'

function MyChannelHeader() {

  const data = JSON.parse(sessionStorage.getItem('isAuth'))
  const user = data.data.user
  return (
    <>
    <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img
              src={user?.avatar}
              alt="Channel"
              className="h-full w-full" />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bold text-xl">{user?.fullName}</h1>
            <p className="text-sm text-gray-400">{`@${user?.username}`}</p>
            <p className="text-sm text-gray-400">{user.subscriber?.length} Subscribers · {user.subscribeTo?.length} Subscribed</p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px] justify-end">
            <button className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-red-600 rounded-lg group-hover:text-red-600">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-red-600"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg- group-hover:-rotate-180 ease"></span>
                  <span className="relative">Edit</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <ul className="no-scrollbar sticky top-[66px] z-[2]  flex justify-between items-center flex-row overflow-auto p-2 rounded-xl border-b-2 border-red-600 bg-[#121212] py-2 sm:top-[82px]">
          
        <li className="w-full">
  <NavLink to='/mychannel/videos' className={({ isActive }) => ` ${isActive ? "text-red-600" : "text-gray-200"}`}>
  <button className='w-[80%] font-semibold text-l px-3 py-1.5'>Videos</button>
  </NavLink>
</li>
<li className="w-full">
  <NavLink to='/mychannel/playlist' className={({ isActive }) => ` ${isActive ? "text-red-600" : "text-gray-200"}`}>
   <button className='w-[80%] font-semibold text-l px-3 py-1.5'> Playlist </button>
  </NavLink>
</li>
<li className="w-full">
  <NavLink to='/mychannel/tweet' className={({ isActive }) => ` ${isActive ? "text-red-600" : "text-gray-200"}`}>
    <button className='w-[80%] font-semibold text-l px-3 py-1.5'>Tweets</button>
  </NavLink>
</li>
<li className="w-full">
  <NavLink to='/mychannel/tedh' className={({ isActive }) => ` ${isActive ? "text-red-600" : "text-gray-200"}`}>
  <button className='w-[80%] font-semibold text-l px-3 py-1.5'>Subscribed</button>
  </NavLink>
</li>


          
        </ul>
      
        </>
  )
}

export default MyChannelHeader