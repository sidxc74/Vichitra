import axios from "axios";

const uri = import.meta.env.SERVER_URI

const loginApi = async (formData) => {
    try {
        
        const response = await axios.post(`${uri}/users/login`, formData);
        return response.data; 
    } catch (error) {
        
        console.error("Error in loginApi:", error);
        throw error; 
    }
};

export default loginApi;
