import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { postServices } from '../Services/postServices';

const initialState = {
  loading: false,
  postList: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(startFetchAllPosts.fulfilled),
      (state: any, action: any) => {
        state.postList = action.payload.posts;
        state.loading = false;
      }
    );
  },
});

export const startFetchAllPosts = createAsyncThunk(
  'post/fetchAllPosts',
  async (_, thunkAPI) => {
    try {
      return await postServices.fetchPostsAll();
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const startFetchPostsByUser = createAsyncThunk(
  'post/fetchPostsByUser',
  async (id: number, thunkAPI) => {
    try {
      return await postServices.fetchPostByUser(id);
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);
