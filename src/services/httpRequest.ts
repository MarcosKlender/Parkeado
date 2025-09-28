import { clearToken, getToken } from "@/config/security/token";
import axios from "axios";

const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND;
const BASE_URL = HOST_BACKEND; 

const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use(
  function (config: any) {
    // Agregar token a las cabeceras
    let dataToken = getToken() || "{}";
    if (!dataToken){
      dataToken =''
    }
    if (dataToken) {
      // Agregar token a las cabeceras de la solicitud
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${dataToken}`,
      };
    }
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (r) => r,
  (error) => {
    console.log(error)
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      clearToken();
      // Importante: evita loops si ya estás en "/"
      if (window.location.pathname !== "/") {
        window.location.replace("/");
      }
    }
    return Promise.reject(error);
  }
);
// Objeto HttpRequest con diferentes métodos para realizar solicitudes
export const HttpRequest = {
  post: async (url: string, body: any) => {
    return http.post(url, body);
  },
  get: (url: any) => {
    return http.get(url);
  },
  delete: async (url: string) => {
    return http.delete(url);
  },
  put: async (url: string, body: any) => {
    return http.put(url, body);
  },
  patch: async (url: string, body: any) => {
    return http.patch(url, body);
  },

};