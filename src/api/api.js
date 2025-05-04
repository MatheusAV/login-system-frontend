import axios from "axios";
import { useAuth } from "../auth/useAuth";

// URL base da API backend
const api = axios.create({
  baseURL: "https://localhost:7134/api",
});

// Intercepta requisições para adicionar o Bearer Token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
