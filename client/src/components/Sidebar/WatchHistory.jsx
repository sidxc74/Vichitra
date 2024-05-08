import React from 'react'
import EmptyWatchHistory from './EmptyWatchHistory';
import { getUserWatchHistoryApi } from '../../api/users.api';
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom';
import { getTimeDifference } from '../../utils/timeDifference';

function WatchHistory() {
 
    const {data : historyvideos} = useQuery({
        queryKey : ['historyVideos'],
        queryFn : async () => {
            const response = await getUserWatchHistoryApi();
            console.log("in componenet",response.data)
            return response.data
        }

    })

    // console.log(videos)

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 pt-2">
    {
    
        historyvideos?.length>0 ? historyvideos?.map((video) => (
          <div className="w-full max-w-[300px]" key={video?._id}>
            {console.log("inn",video)}
            <NavLink
              state={video}
              to={`/video/${video?._id}`}
            >
              <div className="relative mb-2 w-full pt-[56%]">
                <div className="absolute inset-0">
                  <img
                    src={video?.thumbnail}
                    alt="Advanced React Patterns"
                    className="h-full w-full"
                  />
                </div>
                <span className="absolute bottom-1 right-1 inline-block rounded bg-black/70 text-white px-1.5 text-sm">{Number(video?.duration).toFixed(2)}</span>
              </div>
              <h6 className="mb-1 font-semibold flex text-sm text-gray-800">{video?.title}</h6>
              <p className="flex text-sm text-gray-600">30.1k Views ·{getTimeDifference(video?.createdAt)}</p>
            </NavLink>
          </div>
          
        ))  : <EmptyWatchHistory />}
    
    </div>
    
  )
}

export default WatchHistory