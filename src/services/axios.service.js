import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlhYTEzYWFhNzdmOWUxNTcyNjQ4NDJjNDk3NjBhZSIsInN1YiI6IjYzNGFkMjc1ZTI2M2JiMDA3YzI4M2ViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r_DcAqH9g9-gUXMMnXqEGgtPUQzcu7RLR0DS-j5T0yM';

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


export {axiosService}
