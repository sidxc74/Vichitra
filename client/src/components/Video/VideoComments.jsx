import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addCommentApi, getallvideosCommentsApi} from '../../api/comment.api'
import { getTimeDifference } from '../../utils/timeDifference';
// import { getVideoComments } from '../../../../server/src/controllers/comment.controler';

function VideoComments({video}) {


  const [comment,setComment] = useState('');
  const [commentss, setCommentss] = useState([]);

  const isAuth = JSON.parse(sessionStorage.getItem('isAuth'))
  if(isAuth){
   var user = isAuth.data.user

  }
  

    const{data : comments } = useQuery({
      queryKey : ['comments',`${video?._id}`],
      queryFn : async () => {
        
        const data = await getallvideosCommentsApi(video._id)
        
        setCommentss((prev) => [...data])
        return data
      
      
      }
    })


    const queryClient = new QueryClient();



    const mutationFn = async ({ commentData,VideoId  }) => {
  
      const response = await addCommentApi(commentData,VideoId);
      return response.data;
    };
    
    const { mutate } = useMutation({ mutationFn  });

    

    const handleKeyDown = (e) => {
      if (!(e.key === 'Enter')) return;
    
      mutate(
        { commentData: comment, VideoId: video?._id },
        {
          onSuccess: (data) => {
            
            setComment('')
    
          
            // Update the comments state directly
            setCommentss((prevComments) => 
               [...prevComments, {...data,owner:user}]);

            queryClient.invalidateQueries(["comments", `${video?._id}`], updatedComments)
          },
        }
      );
    };

    

  return (
    <>
    <button class="peer w-full rounded-lg border p-4 text-left duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden"><h6 class="font-semibold">{comments?.length}</h6></button>
          <div
            class="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-white p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
            <div class="block">
              <h6 class="mb-4 font-semibold">{commentss?.length ?? 0}</h6>
              <input
                type="text"
                disabled={!isAuth}
                value={comment}
                class="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-black"
                placeholder="Add a Comment"
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={handleKeyDown}
                
                />
            </div>
            <hr class="my-4 border-black" />
            {
              commentss.length > 0 && commentss?.map((coment) => (
                <div key={coment?._id} >
              <div class="flex gap-x-4">
                <div class="mt-2 h-11 w-11 shrink-0">
                  <img
                    src={coment?.owner?.avatar}
                    alt="sarahjv"
                    class="h-full w-full rounded-full" />
                </div>
                <div class="block">
                  <p class="flex items-center text-black">
                    {coment?.owner?.fullName}
                    <span class="text-sm text-gray-500 px-4">{getTimeDifference(coment.createdAt)}</span>
                  </p>
                  <p class="text-sm text-black">@{coment?.owner?.username}</p>
                  <p class="mt-3 text-sm">{coment.content}</p>
                </div>
              </div>
              <hr class="my-4 border-black" />
            </div>
              ))
            }
            
          </div>
    </>
  )
}

export default VideoComments