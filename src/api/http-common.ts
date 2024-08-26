import axios from "axios";

const api = axios.create({
    baseURL: "https://go-barber-api.onrender.com",
    headers:  {
        "Content-Type": "application/json"
    }
})

api.interceptors.response.use(
    response => response,
    error => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
  
      }
      return Promise.reject(error);
    }
  );

export default api;