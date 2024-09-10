import axios from "axios";
import { APP_ROUTES } from "@/constants/app-routes";
import { getStorageItem } from "@/utils/localStore";

// Acessa o token diretamente do localStorage
const token = getStorageItem("token"); 

const api = axios.create({
    baseURL: "https://go-barber-back.onrender.com",
    headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` }) // Adiciona o cabeçalho Authorization somente se o token existir
    }
});

// Interceptor para redirecionar em caso de erro 401 ou 403
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            window.location.href = APP_ROUTES.public.login;
        }
        return Promise.reject(error);
    }
);

export default api;
