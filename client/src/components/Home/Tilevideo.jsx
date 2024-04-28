import React from 'react'
import { useVideo } from '../../state/serverState';
import { NavLink } from 'react-router-dom';
import { getTimeDifference } from '../../utils/timeDifference';

function Tilevideo() {


  const { data: videos, isLoading, isError, error } = useVideo();
  



  if(isLoading) return <div>Loading......</div>
  if(isError) return <div>Error {error.message}</div>

  

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
        {videos?.map((video) => (

          
<NavLink 
key={video._id}
state={video}
to= {`/video/${video._id}`} 
>

<div className="w-full max-w-[300px]" >
  <div className="relative mb-2 w-full pt-[56%]">
    <div className="absolute inset-0">
      <img
        src={video.thumbnail}
        alt="Getting Started with Express.js"
        className="h-full w-full"
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