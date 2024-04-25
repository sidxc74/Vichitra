import React, { useState } from 'react';
import { useUploadVideo } from '../../state/serverState';
import MyChannelUpload from './MyChannelUpload';
import MyChannelEmpty from './MyChannelEmpty';
import { useQuery } from '@tanstack/react-query';
import { getMyVideosApi } from '../../api/video.api';
import MyChannelVideo from './MyChannelVideo';

function MyChannelHome() {
  const [uploadVideo, setUploadVideo] = useState(false);

  const data = JSON.parse(sessionStorage.getItem('isAuth'))
  const user = data.data.user


 
  const { data: videos, isLoading, isError, error } = useQuery({
    queryKey: ['myvideos'],
    queryFn: async () => {
      const response =  await getMyVideosApi(user._id)
      console.log("here",response)
      return response.data
    }
  }
  )

  
  

  


  
  return (
    <>
      
        {
            uploadVideo ? <MyChannelUpload  /> : videos?.length > 0 ?<MyChannelVideo videos={videos} />: <MyChannelEmpty setUploadVideo={setUploadVideo} />
        }
    
    
    </>
  );
}

export default MyChannelHome;