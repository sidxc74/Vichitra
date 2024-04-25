import axiosInstance from "../config/axios.config"

const getallvideosCommentsApi = async(videoId) => {
    try {
        const response= await axiosInstance.get(`v1/comment/${videoId}`)
        
        return response.data.data
        
    } catch (error) {

        
        throw error
        
    }
}


const addCommentApi = async (commentData, videoId) => {
    try {
        

        const response = await axiosInstance.post(`v1/comment/${videoId}`, {commentData}, {
            headers: {

                
                'Content-Type': 'application/json', 
                
            }
        });

        
        return response.data;
    } catch (error) {
        
        throw error;
    }
};





export {
   getallvideosCommentsApi,
    addCommentApi
}