import React from 'react'
import SearchedChannelVideo from './SearchedChannelVideo'
import SearchedChannelEmptyy from './SearchedChannelEmpty'
import { getMyVideosApi } from '../../api/video.api';
import { useQuery } from '@tanstack/react-query';


function SearchedChannelHome({channel}) {


  const { data: videos, isLoading, isError, error } = useQuery({
    queryKey: ['channelvideos'],
    queryFn: async () => {
      const response =  await getMyVideosApi(channel?._id)
      console.log("here",response)
      return response.data
    }
  }
  )

  return (
  
      <>
        
          {
              videos?.length > 0 ?<SearchedChannelVideo videos={videos} /> : <SearchedChannelEmptyy />
          }
      
      
      </>
    );
  
}

export default SearchedChannelHome