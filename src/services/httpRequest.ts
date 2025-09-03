import axios from "axios";

const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND;
const BASE_URL = HOST_BACKEND; 

const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use(
  function (config: any) {
    // Agregar token a las cabeceras
    let dataToken = sessionStorage.getItem("token") || "{}";
    if (!dataToken){
      dataToken =''
    }
    console.log("dataToken", dataToken);
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