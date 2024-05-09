import { useMutation } from '@tanstack/react-query';
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axiosInstance from '../../config/axios.config';
import { searchApi } from '../../api/users.api';

function Search() {


    const [search, setSearch] = useState('');
    const [usersResult, setusersResult] = useState([])
    const [videosResult, setVideosResult] = useState([])
    const [showSerach, setShowSearch] = useState(false)
    const navigate = useNavigate()
    
    const debounce = (func) => {
        let timer;
        return function(...args){
            const context = this;
            if(timer) clearTimeout(timer)
                timer = setTimeout(()=>{
                    timer = null
                    func.apply(context, args);
                },300)
        }
    }


    useEffect(() => {
        if(search === '') return
        else
        {
            mutate(search,{
                onSuccess : (data) => {
                    console.log(data.users)
                    setusersResult((prev)=>data.users)
                    setVideosResult(data.videos)
                    
                }
            })
        }
    },[search])

    const {mutate} = useMutation({
        mutationFn : async(search) => {
                const response = await searchApi(search)
                console.log("sjns",response)
                return response

        }
    })


    

    const handleChange = (e) => {
        const search = e.target.value
        if(search === '') setShowSearch(false)
        setShowSearch(true)
        mutate(search,{
            onSuccess : (data) => {
                console.log(data.users)
                setusersResult((prev)=>data.users)
                setVideosResult(data.videos)
                
            }
        })
        
    }

    const optHandleChange = useCallback(debounce(handleChange),[])


    


    const handleUserClick = (username) => {
        setShowSearch(false)
        setusersResult([])
        setVideosResult([])
        setSearch(username)
        navigate(`/channels/${username}`)
        
    }

  return (
    <>
    <div className="relative mx-auto hidden w-full max-w-md overflow-hidden  sm:block">
       <div>
       <input
          className="w-full border bg-transparent py-1 pl-8 pr-3 border-black rounded-full placeholder-gray-600 outline-none sm:py-2"
          placeholder="Search" 
          onChange={optHandleChange }
          />
        <span className="absolute left-2.5 top-[21px] inline-block -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
        </span>
       </div>
       <div className={`w-[420px] mt-2 mx-auto shadow-neutral-500  shadow-lg min-h-10 max-h-[400px] pt-4 px-2  z-50 overflow-y-auto rounded-3xl bg-white ${showSerach ? "" : "hidden"}`}>
            {usersResult.length>0 ||  videosResult.length>0 ? <ul>
                {
                    usersResult?.map((user) => (
                        <li className=' mb-4 text-black hover:bg-gray-200 rounded-l'>
                        <button
                           onClick={()=>handleUserClick(user.username)}
                         className=' w-[90%]  px-3 h-8 flex  justify-start gap-6 items-center '>
                            
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="black"
                                aria-hidden="true"
                                className="h-6 w-4">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
    
                            <p>{user.username}</p>
    
                        </button>
                    </li>
                    ))
                }
                {
                    videosResult?.map((video) => (
                    <li className=' mb-4 text-black hover:bg-gray-200 rounded-l'>
                        <NavLink 
                            to={`/video/${video._id}`}
                            state={video}
                            className=' w-[90%]  px-3 h-8 flex  justify-start gap-6 items-center '>
                            
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="black"
                                aria-hidden="true"
                                className="h-6 w-4">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>

                            <p>{video.title}</p>

                        </NavLink>
                </li>
                    ))
                }

                
            
            
            
               

              
            </ul> :
            <p className='w-full text-center mb-4'>No Results</p>
            }
            
      
        </div>
      </div>
      
  </>
      
  )
}

export default Search