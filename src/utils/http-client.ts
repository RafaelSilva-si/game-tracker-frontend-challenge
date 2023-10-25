import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const HTTPInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_URL_API
});

HTTPInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.params = {
        ...config.params,
        storeID: 1,
        pageSize: 12,
        onSale: 1,
        AAA: 1
    };

    return config;
});

export default HTTPInstance;
