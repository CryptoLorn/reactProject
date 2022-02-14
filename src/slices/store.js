import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies.slice/movies.slice";
import genresReducer from "./genres.slice/genres.slice";

const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer
    }
})

export default store