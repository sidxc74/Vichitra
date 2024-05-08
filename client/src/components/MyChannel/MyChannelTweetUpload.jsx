import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { createTweetApi } from '../../api/tweet.api'

function MyChannelTweetUpload() {

    const [tweetcontent, setTweetContent] = useState('')

    const { mutate} = useMutation({
        mutationFn : async(tweetcontent) => {
            const response = await createTweetApi(tweetcontent)
            console.log(response)
            return response.data
        }
    })

    const QueryClient = useQueryClient()


    const handleSend = () => {
        mutate(tweetcontent,{
            onSuccess : (data) => {
                    console.log('hdh3nd',data)
                    setTweetContent('')
                    QueryClient.invalidateQueries(['tweets'])

            }
        }
        )
    }

  return (
    <div class="mt-2 border pb-2">
          <textarea
            class="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none"
            onChange={(e) => setTweetContent(e.target.value)}
            value={tweetcontent}
            placeholder="Write a tweet"></textarea>
          <div class="flex items-center justify-end gap-x-3 px-3">
            <button class="inline-block h-5 w-5 hover:text-red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
              </svg>
            </button>
            <button class="inline-block h-5 w-5 hover:text-red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
              </svg>
            </button>
            <button class="bg-red-600 px-3 py-2 font-semibold text-white"
                onClick={handleSend}
            >Send</button>
          </div>
        </div>
  )
}

export default MyChannelTweetUpload