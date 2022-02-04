import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services/post.service";

const initialState = {
    posts: [],
    status: null,
    error: null,
};

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const postSlice = createSlice( {
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
        }
    }
});

const postReducer = postSlice.reducer;

export default postReducer;