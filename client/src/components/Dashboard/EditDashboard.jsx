import {  useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { updateVideoApi } from '../../api/video.api'

function EditDashboard({editVid, setedit,setEditVid}) {


    const[img,setImg] = useState("")
    const[pending,setpending] = useState(false)
    


    const [formData,setFormData] = useState({
        thumbnail : "",
        title : editVid?.title,
        description : editVid?.description

    })

    const queryClient = useQueryClient()


    const {mutate,isPending} = useMutation({
      mutationFn : async ({videoId,formData}) => {
        const response = await updateVideoApi(videoId,formData)
        console.log(response.data) 
        return response.data;
      }
    })


    const handleInputChange = (e) => {
        console.log(formData)
        const { name, value, files } = e.target;
        // If the input is a file input (video or thumbnail), update formData with the selected file
        if (files) {
          setFormData({
            ...formData,
            [name]: files[0], // We assume you only want to handle one file at a time
          });
          setImg(URL.createObjectURL(files[0]))
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
    
        
      }

      const handleEdit = () => {
        mutate({ videoId: editVid?._id, formData: formData }, {
            onSuccess: (data) => {
                console.log("data", data);
                setedit(false);
    
                queryClient.setQueryData(['myvideos'], (prevData) => {
                    const updatedVideos = prevData.map((video) => (video._id === editVid._id ? {...data} : video));
                    return updatedVideos;
                });
                setEditVid({});
                
            }
        });
    };


    if(isPending)
    {
      
      return <div class="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-white/50 px-4 pb-[86px] pt-4 sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
      <div class="w-full max-w-lg overflow-auto rounded-lg border border-gray-300 bg-white p-4">
        <div class="mb-4 flex items-start justify-between">
          <h2 class="text-xl font-semibold">
            Uploading Video...
            <span class="block text-sm text-gray-800">Track your video uploading process.</span>
          </h2>
          <button class="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="mb-6 flex gap-x-2 border p-3">
          <div class="w-8 shrink-0">
            <span class="inline-block w-full rounded-full bg-red-600 p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"></path>
              </svg>
            </span>
          </div>
          <div class="flex flex-col">
            <h6>{formData.title}</h6>
            
            <div class="mt-2">
              <svg
                aria-hidden="true"
                role="status"
                class="mr-2 inline-block h-5 w-5 animate-spin text-gray-800"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="white"></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="red"></path>
              </svg>
              Uploading...
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button class="border px-4 py-3">Cancel</button>
          <button
            class="bg-red-600 px-4 py-3 text-white disabled:bg-red-200"
            disabled="">
            Finish
          </button>
        </div>
      </div>
    </div> 
    }


  return (
    
    <div class="fixed inset-0 top-[calc(66px)] z-10 flex flex-col bg-white/50 px-4 pb-[86px] pt-4 sm:top-[calc(82px)] sm:px-14 sm:py-8">
      <div class="mx-auto w-full max-w-lg overflow-auto rounded-lg border border-gray-700 bg-white p-4">
        <div class="mb-4 flex items-start justify-between">
          <h2 class="text-xl font-semibold">
            Edit Video
            <span class="block text-sm text-gray-800">Share where you&#x27;ve worked on your profile.</span>
          </h2>
          <button class="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <label
          htmlFor="thumbnail"
          class="mb-1 inline-block">
          Thumbnail
          <sup>*</sup>
        </label>
        <label
          class="relative mb-4 block cursor-pointer border border-dashed p-2 after:absolute after:inset-0 after:bg-transparent hover:after:bg-black/10"
          htmlFor="thumbnail">
          <input
            type="file"
            class="sr-only"
            name="thumbnail"
            id="thumbnail"
            required
            onChange={handleInputChange}
            
            />
            {img != "" && <img
          src={img}
            alt={formData?.thumbnail?.name} />}
          
        </label>
        <div class="mb-6 flex flex-col gap-y-4">
          <div class="w-full">
            <label
              htmlFor="title"
              class="mb-1 inline-block">
              Title
              <sup>*</sup>
            </label>
            <input
              id="title"
              required
              type="text"
              name="title"
              class="w-full border bg-transparent px-2 py-1 outline-none"
              value={formData.title} 
              onChange={handleInputChange}
              
              />
          </div>
          <div class="w-full">
            <label
              htmlFor="desc"
              class="mb-1 inline-block">
              Description
              <sup>*</sup>
            </label>
            <textarea
              id="desc"
              name="description"
              required
              class="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
              value={formData.description}
              onChange={handleInputChange}
              
              />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button class="border px-4 py-3">Cancel</button>
          <button onClick={handleEdit} class="bg-red-600 px-4 py-3 text-white disabled:bg-[#E4D3FF]">Update</button>
        </div>
      </div>
    </div>
  )
}

export default EditDashboard