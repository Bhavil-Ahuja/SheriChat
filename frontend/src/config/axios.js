import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_KEY, // Replace with your server's URL
    withCredentials: true, // If you need to include credentials (e.g., cookies) with the request
    headers: {
        'Content-Type': 'application/json',
        // Other default headers if required
    },
});

export default instance;