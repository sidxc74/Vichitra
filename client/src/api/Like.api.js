import axiosInstance from "../config/axios.config";

const getLikesApi = async(videoId) => {

    try {

        const response = await axiosInstance.get(`v1/like/allvideolikes/${videoId}`)
        
        return response.data.likes
        
    } catch (error) {

        
        throw error
        
    }
}


const getUserLikedVideosApi = async() => {
    try {

        const response = await axiosInstance.get(`v1/like/videos`)
        console.log(response)
        return response.data.data
        
    } catch (error) {

        console.log('error in getuserliked videos',error)
        throw error
        
    }
}


const toggleVideoLikeApi = async(videoId) => {
    
    try {

        const response = await axiosInstance.post(`v1/like/toggle/v/${videoId}`)
        
        return response
        
    } catch (error) {

        
        throw error
        
    }
}

export {getLikesApi,
  toggleVideoLikeApi,
  getUserLikedVideosApi
}