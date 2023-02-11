import axios from "axios";
import { api } from "../urlconfigs";

const axiosInstance = axios.create({
    baseURL: api,
    // headers: {
    //     'Authorization':''
    // }
});

export default axiosInstance;