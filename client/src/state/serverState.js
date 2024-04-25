// useAuth.js
import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import { loginApi } from '../api/users.api.js';
import { useNavigate } from 'react-router-dom';
import useAuthStore from './clientState';
import { getAllVideoApi, uploadVideoApi } from '../api/video.api.js';

const queryClient = new QueryClient();



function useAuth() {

    const login = useAuthStore(state => state.login)
    const navigate = useNavigate()

    const authMutation = useMutation({mutationFn: async({formData,callbackFn}) => {
        try {
            
            const data = await callbackFn(formData);
            
            return data; 
        } catch (error) {
            
            
            throw error; 
        }
    }
    
    

},
   
    );

    

    return authMutation;
}


const  useVideo = () => {

    return useQuery({
        queryKey: ['videos'],
        queryFn: getAllVideoApi
    })

}



function useUploadVideo() {
    return  useMutation({
        mutationKey: ['videos'],
        mutationFn: async (formData) => {
            try {
                const data = await uploadVideoApi(formData);
                
                return data;
            } catch (error) {
                
                throw error;
            }
        },
        onSuccess: () => {
            // Invalidate the 'videos' query to trigger refetching
            queryClient.invalidateQueries('videos');
        },
    });

    
}






export { 
    
    useAuth,
    useVideo,
    useUploadVideo
}


