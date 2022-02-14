import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const genreService = {
    getGenres: () => axiosService.get(urls.genres).then(value => value.data).then(value => value.genres)
};