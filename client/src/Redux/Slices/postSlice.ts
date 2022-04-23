import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { PostItemProps } from '../../Interfaces/PostInterfaces';
import { postServices } from '../Services/postServices';

interface InitStatePostProps {
  loading: boolean;
  postList: PostItemProps[];
}

const initialState: InitStatePostProps = {
  loading: false,
  postList: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(startFetchAllPosts.pending), (state) => {
      state.loading = true;
    });
    builder.addMatcher(
      isAnyOf(startFetchAllPosts.fulfilled),
      (state, { payload }) => {
        state.postList = payload.posts;
        state.loading = false;
      }
    );
  },
});

export const startFetchAllPosts = createAsyncThunk(
  'post/fetchAllPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await postServices.fetchPostsAll();
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startFetchPostsByUser = createAsyncThunk(
  'post/fetchPostsByUser',
  async (id: number, { rejectWithValue }) => {
    try {
      return await postServices.fetchPostByUser(id);
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);
