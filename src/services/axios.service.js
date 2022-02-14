import axios from "axios";
import baseURL from "../constants/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWVhOGViYzllMDRkZDI4NGJjZmVkNGUwNjNjMmVhMCIsInN1YiI6IjYxZmVhMWVmZGRkNTJkMDAxYjRmNzU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vFDVtNDsR3YQxgJqtv9jFPyREl8KBpPGmkUI42lO9GI'
    }
})