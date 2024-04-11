import axios from 'axios';


const axiosInstance= axios.create({
  baseURL: 'http://localhost:8000/api', // Base URL for API requests
  headers: {
    'Content-Type': 'application/json', // Common header for JSON requests
  }
});

export default axiosInstance