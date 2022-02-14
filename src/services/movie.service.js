import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs/urls";

export const movieService = {
    getAll: (arr, page) => axiosService.get(`${urls.movies}?${apiKey}&sort_by=popularity.desc&page=${page}&with_genres=${arr.join(',')}`).then(value => value.data),
    getMovieDetails: (id) => axiosService.get(`/movie/${id}`).then(value => value.data),
    getAllMovies: () => axiosService.get(`${urls.movies}`).then(value => value.data)
};