import React from 'react'
import { NavLink } from 'react-router-dom';
import { useVideo } from '../../state/serverState';
import { getTimeDifference } from '../../utils/timeDifference.js';

function RelatedVideos() {

  const { data: videos, isLoading, isError, error } = useVideo();

  
  return (
    <div class="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
        {
          videos?.map((video) => (
            <NavLink key={video._id}
              state={video}
              to= {`/video/${video._id}`}>
            <div class="w-full gap-x-2 border pr-2 md:flex">
               <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                 <div class="w-full pt-[56%]">
                   <div class="absolute inset-0">
                     <img
                       src={video.thumbnail}
                       alt="JavaScript Fundamentals: Variables and Data Types"
                       class="h-full w-full" />
                   </div>
                   <span class="absolute bottom-1 right-1 inline-block rounded bg-black/70 text-white px-1.5 text-sm">{Number(video.duration).toFixed(2)}</span>
                 </div>
               </div>
               <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                 <div class="h-12 w-12 shrink-0 md:hidden">
                   <img
                     src={video.ownerAvatar}
                     alt="reactpatterns"
                     class="h-full w-full rounded-full" />
                 </div>
                 <div class="w-full pt-1 md:pt-0">
                   <h6 class="mb-1 text-sm font-semibold text-gray-900">{video.title}</h6>
                   <p class="mb-0.5 mt-2 text-sm text-gray-800">{video.title}</p>
                   <p class="flex text-sm text-gray-600">{video.views} · {getTimeDifference(video.createdAt)}</p>
                 </div>
               </div>
             </div>
             </NavLink> 
          ))
        }
        </div>
  )
}

export default RelatedVideos