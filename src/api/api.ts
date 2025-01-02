import axios, { AxiosRequestConfig } from "axios";

export async function api(url: string, options?: AxiosRequestConfig) {
    try {
        const instanceApi = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: {
                "Content-Type": "application/json"
            }
        });

        instanceApi.interceptors.request.use(function (config) {
            const token = localStorage.getItem("spotifyToken");
            config.headers.Authorization = token
                ? `Bearer ${JSON.parse(token!)}`
                : "";
            return config;
        });

        const response = await instanceApi.request({
            url: `/v1/${url}`,
            ...options
        });

        return response.data;
    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}
