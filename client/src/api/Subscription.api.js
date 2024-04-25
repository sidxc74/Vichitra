import axiosInstance from "../config/axios.config"


const subscribeApi = async(channelId) => {
    try {

        const response = await axiosInstance.post(`v1/subscription/c/${channelId}/subscribe`)
        console.log("hereeee",response)
        return response.data
    } catch (error) {
        if(error.response.status === 400){
            return error.response.data
        }
        
    }
}


export {
    subscribeApi
}