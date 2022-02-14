import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services/genre.service";

const initialState = {
    genres: [],
    status: null,
    error: null
}

export const getAllGenres = createAsyncThunk(
    'genres/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await genreService.getGenres();
            return genres;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllGenres.pending]:(state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllGenres.fulfilled]:(state, action) => {
            state.genres = action.payload;
        },
        [getAllGenres.rejected]:(state, action) => {

        }
    }
})

const genresReducer = genreSlice.reducer;

export default genresReducer;