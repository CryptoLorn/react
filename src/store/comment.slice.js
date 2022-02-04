import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../services/comment.cervice";

const initialState = {
    comments: [],
    status: null,
    error: null,
};

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const commentSlice = createSlice( {
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer;