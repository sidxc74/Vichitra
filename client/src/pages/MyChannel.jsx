import React from 'react'

import MyChannelEmpty from '../components/MyChannel/MyChannelEmpty'
import MyChannelHeader from '../components/MyChannel/MyChannelHeader'
import MyChannelVideo from '../components/MyChannel/MyChannelVideo'
import MyChannelHome from '../components/MyChannel/MyChannelHome'
function MyChannel() {

  const data = JSON.parse(sessionStorage.getItem('isAuth'))
  const user = data.data.user
  return (<>
    <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img className={user.coverImage} />
        </div>
      </div>
      <div className="px-4 pb-4">
        <MyChannelHeader />
        <MyChannelHome />
      </div>
      </>
      
  ) 
}

export default MyChannel