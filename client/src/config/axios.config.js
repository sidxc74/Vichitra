import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'https://xube.onrender.com/api', // Base URL for API requests
  headers: {
    'Content-Type': 'application/json', // Common header for JSON requests
  },
  withCredentials: true,
  credentials: 'include' // Include credentials with requests
});

export default axiosInstance;

// http://localhost:8000/api