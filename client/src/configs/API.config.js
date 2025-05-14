import axios from "axios";
import { toast } from 'react-toastify';

/**
 * Establishes a connection to the API using Axios.
 */
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Handles toast notifications when making a request to the API.
 */
api.interceptors.response.use(
    (res) => {
        const method = res.config.method;

        if (["post", "put", "delete"].includes(method)) {
            const message = res.data?.message || "Operation successful";
            toast.success(message);
        }

        return res;
    },
    (err) => {
        if (!err.response) {
            toast.error("Network error. Please check your internet connection.");
        } else {
            const message = err.response.data?.message || "Something went wrong";
            toast.error(message);
        }

        return Promise.reject(err);
    }
);

export default api;