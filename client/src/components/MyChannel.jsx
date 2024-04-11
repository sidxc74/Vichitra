import React from 'react'
import MyEmptyComponent from './MyEmptyComponent'
import MyChannelHeader from './MyChannelHeader'

function MyChannel() {
  return (<>
    <div class="relative min-h-[150px] w-full pt-[16.28%]">
        <div class="absolute inset-0 overflow-hidden">
          <img src='logo.ico' />
        </div>
      </div>
      <div class="px-4 pb-4">
        <MyChannelHeader />
        <MyEmptyComponent />
      </div>
      </>
      
  ) 
}

export default MyChannel