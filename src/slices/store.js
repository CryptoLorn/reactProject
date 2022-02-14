import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies.slice/movies.slice";
import genresReducer from "./genres.slice/genres.slice";
import movieDetailsReducer from "./movieDetails.slice/movieDetails.slice";

const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer,
        movieDetailsReducer
    }
})

export default store