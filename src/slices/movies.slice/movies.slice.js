import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    moviesPage: [],
    currentPage: 1,
    totalPages: null,
    status: null,
    genres: [],
    string: '',
    error: null
}

export const getMovies = createAsyncThunk(
    'getMovies/moviesSlice',
    async ({page}, {dispatch, getState}) => {
        try {
            const state = getState();

            const response = await movieService.getAll(state.moviesReducer.genres, state.moviesReducer.currentPage);
            dispatch(setMoviesPage(response));
            dispatch(setTotalPages(response.total_pages));

            return response;

        } catch (e) {
            return e;
        }
    }
);

export const getByString = createAsyncThunk(
    'getByString/movieSlice',
    async ({string, page: currentPage}, {dispatch}) => {
        dispatch(setString({string}));
        dispatch(setCurrentPage({page: currentPage}));
    }
)

const moviesSlice = createSlice({
    name: '/movieSlice',
    initialState,
    reducers: {
        setMoviesPage: (state, action) => {
            state.moviesPage = action.payload.results;
            state.currentPage = action.payload.page;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.page;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setString: (state, action) => {
            state.string = action.payload.string;
        },
    },

    extraReducers: {
        [getMovies.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
        },
    }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export const {setMoviesPage, setTotalPages, setCurrentPage, setString} = moviesSlice.actions;