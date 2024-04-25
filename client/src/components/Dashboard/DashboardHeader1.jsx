import React from 'react'

function DashboardHeader({user,setUpload}) {


  const handleClick = () => {
    setUpload(true)
  }
    
  return (
    <div class="flex flex-wrap justify-between gap-4">
        <div class="block">
          <h1 class="text-2xl font-bold">Welcome Back, {user.fullName}</h1>
          <p class="text-sm text-red-600">   it's getting better everyday.....</p>
          
        </div>
        <div class="block">
          <button class="inline-flex items-center gap-x-2 rounded-xl bg-red-600 px-3 py-2 font-semibold text-white"
          onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="h-5 w-3">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            Upload video
          </button>
        </div>
      </div>
  )
}

export default DashboardHeader