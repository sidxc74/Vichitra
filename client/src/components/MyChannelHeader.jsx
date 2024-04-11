import React from 'react'

function MyChannelHeader() {
  return (
    <>
    <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">React Patterns</h1>
            <p className="text-sm text-gray-400">@reactpatterns</p>
            <p className="text-sm text-gray-400">600k Subscribers · 220 Subscribed</p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px] justify-end">
            <button class="relative inline-block text-lg group">
      <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-red-600 rounded-lg group-hover:text-red-600">
      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-red-600"></span>
      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
      <span class="relative">Subscribe</span>
      </span>
      {/* <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span> */}
      </button>
            </div>
          </div>
        </div>
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
          <li className="w-full"><button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">Videos</button></li>
          <li className="w-full"><button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Playlist</button></li>
          <li className="w-full"><button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Tweets</button></li>
          <li className="w-full"><button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Subscribed</button></li>
        </ul>
      
        </>
  )
}

export default MyChannelHeader