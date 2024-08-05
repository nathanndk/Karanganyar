import axios from "axios";
import helper from "@/utils/helper";
import Router from "next/router";
import Cookies from "js-cookie";
// Membuat instance Axios dengan konfigurasi default

const API_URL = "https://api.karangjati.byte-labs.tech";
const axiosInterceptor = axios.create({
    baseURL: API_URL,
    timeout: 10000, // Timeout dalam milidetik
});
axiosInterceptor.interceptors.request.use(
    (config) => {
        // Mendapatkan token dari tempat penyimpanan Anda (misalnya local storage, state, atau cookie)
        const token = Cookies.get("token");

        if (token) {
            config.headers["Authorization"] = `${token}`;
        }
        // console.log(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInterceptor.interceptors.response.use(
    (response) => {
        if (response.data.data.message) {
            helper.addNotification(response.data.data.message, "success");
        }
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            helper.addNotification(error.response.data.error_message, "error");
            Cookies.remove("token");
            Cookies.remove("user");
            Router.push("/login");
        }
        if (error.response.status === 403) {
            helper.addNotification(error.response.data.wrror_message, "error");
        }
        if (error.response.status === 422) {
            helper.addNotification(error.response.data.error_message, "error");
        }
        return Promise.reject(error);
    }
);

export default axiosInterceptor;
