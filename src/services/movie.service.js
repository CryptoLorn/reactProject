import {axiosService} from "./axios.service";

const apiKey = 'api_key=a9ea8ebc9e04dd284bcfed4e063c2ea0'

export const movieService = {
    getByPage: (page) => axiosService.get(`/discover/movie/?page=${page}`).then(value => value.data),
    getGenres: () => axiosService.get('/genre/movie/list').then(value => value.data).then(value => value.genres),
    getMovieDetails: (id) => axiosService.get(`/movie/${id}`).then(value => value.data),
    getVideos: (id) => axiosService.get(`/movie/${id}/videos`).then(value => value.data),
    getPageByGenre: (genresArr, page) => axiosService.get(`https://api.themoviedb.org/3/discover/movie?${apiKey}&sort_by=popularity.desc&page=${page}&with_genres=${genresArr.join(',')}`).then(value => value.data),
    getByString: (string, page) => axiosService.get(`https://api.themoviedb.org/3/search/movie?api_key=64e6b72271fd3ad7f4e27db0609395b0&language=en-US&query=${string}&page=${page}`).then(value => value.data)
};