import axiosInstance from "../config/axios.config"

const createTweetApi = async(tweetcontent) => {
    try {

        const response = await axiosInstance.post('/v1/tweet', {tweetcontent})
        console.log("here")
        return response.data
        
    } catch (error) {
        
        console.log("error",error)
        throw error
    }
}


const getTweetApi = async(userId) => {
    try {
        const response = await axiosInstance.get(`/v1/tweet/user/${userId}`)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
        
    }
}


export {
    createTweetApi,
    getTweetApi
}