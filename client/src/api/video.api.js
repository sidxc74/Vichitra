import axiosInstance from "../config/axios.config";

const getAllVideoApi = async () => {

    try {

        const response = await axiosInstance.get('/v1/vedio/getallvideos');
        return response.data.data;

        
    } catch (error) {

        
        throw error; 
        
    }

}


const getVideoByIdApi = async (videoId) => {
        
    try {

        const response = await axiosInstance.get(`/v1/vedio/getavideo/${videoId}`);
        
        return response.data.data;
        
    } catch (error) {
        
    }
 }


const getMyVideosApi = async (userid) => {

    try {
        
        const response = await axiosInstance.get(`/v1/vedio?userId=${userid}`)
        console.log(response)
        

        return response.data
        
    } catch (error) {
        
        throw error; 
        
    }
} 

const getAVideoFromId = async () => {
    try {

        const resposne = await axiosInstance.get('/v1/vedio/getvideobyid');
        
    } catch (error) {
        
    }
}




const uploadVideoApi = async(formData) => {

    try {

       
        
        const response = await axiosInstance.post(`/v1/vedio`, formData, {headers: {'Content-Type': 'multipart/form-data'}});

        return response.data; 
    } catch (error) {
        
        
        throw error; 
    }

}


const increaseViewsApi = async(videoId) => {
    try {
        const response = await axiosInstance.patch(`/v1/vedio/increaseViews/${videoId}`)
        return response.data;
    } catch (error) {
        console.error("error in increaseViews api")
        throw error;
        
    }
}

const togglePublishStatusApi = async(videoId) => {
    try { 

        const response = await axiosInstance.get(`v1/vedio/toggle/publish/${videoId}`)
        return response.data;


    } catch (error) {

        console.error("error in toggle api")
        throw error;
        
    }
}


const updateVideoApi = async (videoId,formData) => {

    try {
        const response = await axiosInstance.patch(`/v1/vedio/${videoId}`, formData,{headers: {'Content-Type': 'multipart/form-data'}})
        console.log(response)
        return response.data
    } catch (error) {
        console.log("error in updateApi",error)
        throw error
        
    }

}

const deleteVideoApi = async (videoId) => {
  try {
    const response = await axiosInstance.delete(`/v1/vedio/${videoId}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log("error in delete api",error)
    throw error
    
  }
}


export {
    getAllVideoApi,
    uploadVideoApi,
    getMyVideosApi,
    getVideoByIdApi,
    increaseViewsApi,
    togglePublishStatusApi,updateVideoApi,
    deleteVideoApi

}
