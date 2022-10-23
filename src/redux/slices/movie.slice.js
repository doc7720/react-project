import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const getOneMovie = createAsyncThunk(
    'movieSlice/getOneMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            const movies = await movieService.getOneMovie(id);
            return movies.data.results;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)


const getSearchMovie = createAsyncThunk(
    'movieSlice/getSearchMovie',
    async ({query}, {rejectWithValue}) => {
        try {
            const movies = await movieService.getMovieSearch(query);
            return movies.data.results;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (pageNumber, {rejectWithValue}) => {
        try {
            const movies = await movieService.getAll(pageNumber);
            return movies.data.results;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const initialState = {
    movies: [],
    status: null,
    error: null,
    query: '',
};


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        makeQuery: (state, action) => {
            state.query = action.payload.data.query;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.errors = null;
            })
            .addCase(getSearchMovie.fulfilled, (state, action) => {
                state.movies = action.payload.query;
                state.errors = null;
            })
            .addCase(getOneMovie.fulfilled, (state, action) => {
                state.movies = action.payload.id;
                state.errors = null;
            })
    }
});


const {reducer: movieReducer, makeQuery} = movieSlice;

const movieActions = {
    getAll,
    getSearchMovie,
    getOneMovie,
    makeQuery
}

export {movieReducer, movieActions}



