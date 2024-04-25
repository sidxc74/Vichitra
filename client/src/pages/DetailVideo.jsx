import React, { useEffect } from 'react';
import VideoPlayer from '../components/Video/VideoPlayer';
import VideoComments from '../components/Video/VideoComments';
import RelatedVideos from '../components/Video/RelatedVideos';
import { useLocation } from 'react-router-dom';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { updateUserHistory } from '../api/users.api';

import { increaseViewsApi } from '../api/video.api';

function DetailVideo() {
  const location = useLocation();
  const video = location.state;

  const queryClient = new QueryClient();


  const {mutate} = useMutation({
    mutationFn : async () => {
      const response = await increaseViewsApi(video?._id)
      console.log(response)
      return response.data;
    }
  })

  useEffect(() => {
      if(video){
        mutate(video._id,{
        })
      }
  },[video])

  

  return (
    <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
      <div className="col-span-12 pl-16 w-full">
        <VideoPlayer video={video} />
        <VideoComments video={video} />
      </div>
      <RelatedVideos />
    </div>
  );
}

export default DetailVideo;