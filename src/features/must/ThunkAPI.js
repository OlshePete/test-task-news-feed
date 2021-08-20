import axios from "axios";

export const baseURL = 'https://meduza.io/';

export const apiClient = axios.create({
    // baseURL,
});

// apiClient.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('token')
//         if (token) { config.headers['Authorization'] = `Token ${token}`}
//         return config
//     },
//     error => Promise.reject(error)
// )