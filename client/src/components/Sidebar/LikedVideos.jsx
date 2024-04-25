import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUserLikedVideosApi } from '../../api/Like.api'
import { NavLink } from 'react-router-dom'
import { getTimeDifference } from '../../utils/timeDifference'
import EmptyLikedVideo from './EmptyLikedVideo'

function LikedVideos() {


    const {data : videos} = useQuery({
        queryKey : ['likedVideos'],
        queryFn : async () => {
            const response = await getUserLikedVideosApi();
            console.log("in componenet",response)
            return response
        }

    })

    

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 pt-2">
    {
    
        videos?.length>0 ? videos?.map((video) => (
          <div className="w-full max-w-[300px]" key={video._id}>
            {console.log("inn",video)}
            <NavLink
              state={video?.likedvedios}
              to={`/video/${video?.likedvedios._id}`}
            >
              <div className="relative mb-2 w-full pt-[56%]">
                <div className="absolute inset-0">
                  <img
                    src={video?.likedvedios.thumbnail}
                    alt="Advanced React Patterns"
                    className="h-full w-full"
                  />
                </div>
                <span className="absolute bottom-1 right-1 inline-block rounded bg-black/70 text-white px-1.5 text-sm">{Number(video?.likedvedios.duration).toFixed(2)}</span>
              </div>
              <h6 className="mb-1 font-semibold flex text-sm text-gray-800">{video?.likedvedios.title}</h6>
              <p className="flex text-sm text-gray-600">{video?.likedvedios.views} ·{getTimeDifference(video?.likedvedios.createdAt)}</p>
            </NavLink>
          </div>
          
        ))  : <EmptyLikedVideo />}
    
    </div>
  )
}

export default LikedVideos