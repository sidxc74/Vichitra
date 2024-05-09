import { QueryClient, useMutation } from '@tanstack/react-query'
import React from 'react'
import { subscribeApi } from '../../api/Subscription.api'

function SearchedChannelHeader({channel}) {

  const queryClient = new QueryClient()

  const isAuth = JSON.parse(sessionStorage.getItem('isAuth'))
  


  const {mutate} = useMutation({
    mutationFn : async(channelId) => {

      const response = await subscribeApi(channelId)
      console.log(response)
      return response.data

    }
  })




  const handleClick = () => {
    if(!isAuth) return alert('Please login to subscribe')

      mutate(channel?._id,{
        onSuccess : () => {
            queryClient.invalidateQueries(['channelvideos'])
        }
      })

  }




  return (
    <>
    <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative p-2 -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img
              src={channel?.avatar}
              alt="avatar"
              className="h-full object-cover w-full" />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bold text-xl">{channel?.fullName}</h1>
            <p className="text-sm text-gray-400">{`@${channel?.username}`}</p>
            <p className="text-sm text-gray-400">{channel?.subscribedCount} Subscribers · {channel?.channelSubscribedToCount} Subscribed</p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px] justify-end">
              <button className="relative inline-block text-lg group"
                onClick={handleClick}
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-red-600 rounded-lg group-hover:text-white/50  ">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-red-600"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-  ease"></span>
                  <span className="relative ">{channel?.isSubscribed ? "subscribed" : "subscribe"}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto p-2 rounded-xl border-b-2 border-red-600 bg-[#121212] py-2 sm:top-[82px]">
          <li className="w-full"><button className="w-[80%] font-semibold text-l text-gray-200 px-3 py-1.5">Playlist</button></li>
          <li className="w-full"><button className="w-[80%]  font-semibold text-l  px-3 py-1.5  text-red-600">Videos</button></li>
          <li className="w-full"><button className="w-[80%] font-semibold text-l text-gray-200 px-3 py-1.5">Tweets</button></li>
          <li className="w-full"><button className="w-[80%] font-semibold text-l text-gray-200 px-3 py-1.5">Subscribed</button></li>
          
        </ul>
      
        </>
  )
}

export default SearchedChannelHeader