import axios from "axios";
const base = import.meta.env.VITE_API_URL;


const api = axios.create({
    baseURL: `${base}api`
})

export default api