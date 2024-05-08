import axiosInstance from "../config/axios.config";


const loginApi = async (formData) => {
    
    try {
        
        const response = await axiosInstance.post(`/v1/users/login`, formData);
        console.log("here")
        return response.data; 
    } catch (error) {
        
        console.log("Error in loginApi:", error);
        throw error; 
    }
};

const registerApi = async (formData) => 
{
   
    try {
        
        const response = await axiosInstance.post(`/v1/users/register`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
        return response.data; 
    } catch (error) {
        
        console.error("Error in registerApi:", error);
        throw error; 
    }

}


const getChannelProfileApi = async (userName) => {

    try {

        const response = await axiosInstance.get(`/v1/users/c/${userName}`)
        return response.data
        
    } catch (error) {
        console.error("error in get user channel api", error)
        throw error;
        
    }

}


const updateUserHistoryApi = async(videoId) => {
    try {
        console.log(videoId)
        const response = await axiosInstance.patch(`/v1/users/updatehistory`,{videoId})
        console.log(response)
        return response.data;
        
    } catch (error) {

        console.error("error in watchHistory:", error);
        throw error
        
    }


}


const getUserWatchHistoryApi = async() => {
    try {
        
        const response = await axiosInstance.get(`/v1/users/WatchHistory`)
        console.log(response)
        return response.data;
        
    } catch (error) {

        console.error("error in watchHistory:", error);
        throw error
        
    }
}

export{
    loginApi,
  registerApi,
  updateUserHistoryApi,
  getUserWatchHistoryApi,
  getChannelProfileApi

}  
