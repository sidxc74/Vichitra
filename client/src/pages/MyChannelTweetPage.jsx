import React from 'react'

import MyChannelHeader from '../components/MyChannel/MyChannelHeader'
import MyChannelTweetUpload from '../components/MyChannel/MyChannelTweetUpload'
import MyChannelTweet from '../components/MyChannel/MyChannelTweet'

function MyChannelTweetPage() {

  const data = JSON.parse(sessionStorage.getItem('isAuth'))
  const user = data.data.user
  return (<>
    <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={user.coverImage}/>
        </div>
      </div>
      <div className="px-4 pb-4">
        <MyChannelHeader />
        <MyChannelTweetUpload />
        <div className='w-full'>
            <MyChannelTweet user={user} />
        </div>
        
      </div>
      </>
      
  ) 
}

export default MyChannelTweetPage