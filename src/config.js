import axios from "axios";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

api.interceptors.response.use((res) => res.data);

export default api;

export const getUsers = () => api.get("/users");
