import axios from "axios";

const API = axios.create({
  baseURL: "https://artgallery-backend-production-f554.up.railway.app",
});

// Attach token automatically to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;