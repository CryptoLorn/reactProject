import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movieDetails: [],
    status: null,
    error: null
}

export const getMovieDetails = createAsyncThunk(
    'movieDetails/getMovieDetails',
    async (_, {rejectWithValue}) => {
        try {
            const movieDetails = await movieService.getMovieDetails();
            return movieDetails;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getMovieDetails.pending]:(state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieDetails.fulfilled]:(state, action) => {
            state.genres = action.payload;
        },
        [getMovieDetails.rejected]:(state, action) => {

        }
    }
})

const movieDetailsReducer = movieDetailsSlice.reducer;

export default movieDetailsReducer;