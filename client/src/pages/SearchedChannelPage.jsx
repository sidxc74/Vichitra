import React from 'react'

import MyChannelEmpty from '../components/MyChannel/MyChannelEmpty'
import MyChannelHeader from '../components/MyChannel/MyChannelHeader'
import MyChannelVideo from '../components/MyChannel/MyChannelVideo'
import MyChannelHome from '../components/MyChannel/MyChannelHome'
import SearchedChannelHeader from '../components/searchedChannel/SearchedChannelHeader'
import SearchedChannelHome from '../components/searchedChannel/SearchedChannelHome'
import SearchedChannelEmptyy from '../components/searchedChannel/SearchedChannelEmpty'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getChannelProfileApi } from '../api/users.api'


function SearchedChannelPage() {

    const {channelUserName} = useParams()
    const {data:channel} = useQuery({
        queryKey : ['channel',`${channelUserName}`],
        queryFn : async () => {
            const response = await getChannelProfileApi(channelUserName)
            console.log("in search channel",response)
            return response.data
        }
        
    })

  
  return (<>
    <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img  src={user.coverImage} />
        </div>
      </div>
      <div className="px-4 pb-4">
        <SearchedChannelHeader channel={channel} />
        <SearchedChannelHome channel={channel} />
      </div>
      </>
      
  ) 
}

export default SearchedChannelPage