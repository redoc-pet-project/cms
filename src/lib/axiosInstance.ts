import axios from "axios";
import { API_PATH } from "~/common/constant/apiPath";

// Create instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "", // fallback to "" if not set
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // optional, only if your API uses cookies
});

// Attach token if needed
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle global response errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.path !== API_PATH.AUTH.LOGIN
    ) {
      console.warn("Unauthorized, redirecting to login...");
      window.location.href = "/login"; // or use a router redirect if inside React component
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
