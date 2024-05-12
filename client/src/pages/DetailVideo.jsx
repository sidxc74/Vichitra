import React, { useEffect } from 'react';
import VideoPlayer from '../components/Video/VideoPlayer';
import VideoComments from '../components/Video/VideoComments';
import RelatedVideos from '../components/Video/RelatedVideos';
import { useLocation } from 'react-router-dom';
import { QueryClient, useMutation } from '@tanstack/react-query';
import {  updateUserHistoryApi } from '../api/users.api';

import { increaseViewsApi } from '../api/video.api';

function DetailVideo() {
  const location = useLocation();
  const video = location.state;

  const queryClient = new QueryClient();


  const mutation1 = useMutation({
    mutationFn : async () => {
      const response = await increaseViewsApi(video?._id)
      console.log(response)
      return response.data;
    }
  })

  const mutation2 = useMutation({
    mutationFn : async () => {
      const response = await updateUserHistoryApi(video?._id)
      console.log(response) 
      return response.data
    }
  })

  useEffect(() => {
      if(video){
        mutation1.mutate(video._id,{
        })
        mutation2.mutate(video._id)

      }
  },[video])

  

  return (
    <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
      <div className=" col-span-full  pl-16 w-full">
        <VideoPlayer video={video} />
        <VideoComments video={video} />
      </div>
      <RelatedVideos />
    </div>
  );
}

export default DetailVideo;