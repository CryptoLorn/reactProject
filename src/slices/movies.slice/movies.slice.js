import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

export const getMoviesPerPage = createAsyncThunk(
    'moviesSlice/getMoviesPerPage',
    async ({page}, {
        dispatch, getState, rejectWithValue
    }) => {
        try {
            const response = await movieService.getByPage(page);
            dispatch(setMoviesPerPage({page}));
            dispatch(setTotalPages(response.total_pages));
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    });

export const getMoviesGenres = createAsyncThunk('moviesSlice/getMoviesGenres', async (_, {dispatch}) => {
    let genres = await movieService.getGenres();
    genres.map(genre => genre.status = false);
    dispatch(setGenres(genres));
});


export const getByGenre = createAsyncThunk(
    'getByGenre/moviesSlice',
    async ({page}, {dispatch, getState}) => {
        try {
            const state = getState();

            const response = await movieService.getPageByGenre(state.moviesReducer.chosenGenres, state.moviesReducer.currentPage);
            dispatch(setMoviesPerPage(response));
            dispatch(setMoviesWithGenresPerPage(response));
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

        const response = await movieService.getByString(string, currentPage);

        return response;

    }
)

const initialState = {
    moviesPerPage: [],
    currentPage: 1,
    totalPages: null,
    genres: [],
    genresOfCurrentMovie: [],
    status: null,
    error: null,
    switcherStatus: true,
    chosenGenres: [],
    moviesWithGenresPerPage: [],
    string: ''
}

const moviesSlice = createSlice({
    name: '/movieSlice',
    initialState,
    reducers: {
        setMoviesPerPage: (state, action) => {
            state.moviesPerPage = action.payload.results;
            state.currentPage = action.payload.page;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        changeStatus: (state, action) => {
            const changedGenre = state.genres.find(genre => genre.id === action.payload.id);
            changedGenre.status = !changedGenre.status;

            if (changedGenre.status) {
                state.chosenGenres.push(changedGenre.id);
            } else {
                state.chosenGenres.splice(changedGenre, 1);
            }
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setMoviesWithGenresPerPage: (state, action) => {
            state.moviesWithGenresPerPage = action.payload.results;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.page;
        },
        setString: (state, action) => {
            state.string = action.payload.string;
        },
    },

    extraReducers: {
        [getByGenre.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getByGenre.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.moviesPerPage = action.payload.results
        },
        [getByString.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getByString.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.moviesPerPage = action.payload.results;
            state.totalPages = action.payload.total_pages;
        },
    }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;

export const {
    setMoviesPerPage,
    setGenres,
    changeStatus,
    setTotalPages,
    setMoviesWithGenresPerPage,
    setCurrentPage,
    setString
} = moviesSlice.actions;