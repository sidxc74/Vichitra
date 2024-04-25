import React from 'react';
import { NavLink } from 'react-router-dom';
import { getTimeDifference } from '../../utils/timeDifference';



function SearchedChannelVideo({videos}) {



  return (
    
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 pt-2">
            {videos?.map((video) => (
        <div className="w-full max-w-[300px]" key={video._id}>
          <NavLink
            state={video}
            to={`/video/${video._id}`}
          >
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0">
                <img
                  src={video.thumbnail}
                  alt="Advanced React Patterns"
                  className="h-full w-full"
                />
              </div>
              <span className="absolute bottom-1 right-1 inline-block rounded bg-black/70 text-white px-1.5 text-sm">{Number(video.duration).toFixed(2)}</span>
            </div>
            <h6 className="mb-1 font-semibold flex text-sm text-gray-800">{video.title}</h6>
            <p className="flex text-sm text-gray-600">{video.views} ·{getTimeDifference(video.createdAt)}</p>
          </NavLink>
        </div>
      ))}
        </div>
     
        
  );
}

export default SearchedChannelVideo;

