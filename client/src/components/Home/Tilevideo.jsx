import React from 'react'
import { useVideo } from '../../state/serverState';
import { NavLink } from 'react-router-dom';
import { getTimeDifference } from '../../utils/timeDifference';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Tilevideo() {


  const { data: videos, isLoading, isError, error } = useVideo();
  const array = [1,2,3,4,5,6]



  if(isLoading){
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-16 p-4">
        {
            array.map((a) => (
              <div key={a} className="w-full mx-auto max-w-[300px] " >
  <div className="relative mb-2 w-full pt-[56%]">
    <div className="absolute inset-0 rounded-xl ">
    <Skeleton height="100%" />
    </div>
    <Skeleton />
  </div>
  <div className="flex gap-x-2">
    <div className="h-10 w-10 shrink-0">
    <Skeleton circle="true" height="100%" />
    </div>
    <div className="w-full">
    <Skeleton width="100%" />
      <Skeleton width="100%" />
      
        <Skeleton width="20%" />
    
    </div>
  </div>
</div>
            ))
        }
      </div>
    )
  }
  if(isError) return <div>Error {error.message}</div>

  

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-x-16 gap-y-6 p-4">
        {videos?.map((video) => (

          
<NavLink 
key={video._id}
state={video}
to= {`/video/${video._id}`} 
>

<div className="w-full mx-auto max-w-[300px] " >
  <div className="relative mb-2 w-full pt-[56%]">
    <div className="absolute inset-0 rounded-xl ">
      <img
        src={video.thumbnail}
        alt="Getting Started with Express.js"
        className="h-full w-full border border-white rounded-2xl"
      />
    </div>
    <span className="absolute bottom-1 right-1 inline-block rounded bg-black/70 text-white px-1.5 text-sm">
      {Number(video.duration).toFixed(2)}
    </span>
  </div>
  <div className="flex gap-x-2">
    <div className="h-10 w-10 shrink-0">
      <img
        src={video.owner?.avatar}
        alt="expresslearner"
        className="h-full w-full rounded-full"
      />
    </div>
    <div className="w-full">
      <h6 className="mb-1 font-semibold">
        {video.title || "Getting Started with Express.js"}
      </h6>
      <p className="flex text-sm text-gray-800">
        {video.views || "11.k"} Views ·{" "}
        {video.createdAt && getTimeDifference(video.createdAt)}
      </p>
      <p className="text-sm text-gray-700">
        {video.owner?.username || "Express Learner"}
      </p>
    </div>
  </div>
</div>
</NavLink>

        ))}
        
        
      </div>
  )
}

export default Tilevideo