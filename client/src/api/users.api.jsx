import axiosInstance from "../config/axios.config";


const loginApi = async (formData) => {
    
    try {
        
        const response = await axiosInstance.post(`/v1/users/login`, formData);
        return response.data; 
    } catch (error) {
        
        console.error("Error in loginApi:", error);
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

export{
    loginApi,
  registerApi,

}  
