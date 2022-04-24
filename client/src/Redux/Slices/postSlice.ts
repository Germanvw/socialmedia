import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { PostItemProps } from '../../Interfaces/PostInterfaces';
import { postServices } from '../Services/postServices';
import { authActions } from './authSlice';

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
    builder.addMatcher(
      isAnyOf(
        startPostFetchAll.pending,
        startPostFetchByUser.pending,
        startPostCreate.pending,
        startPostDelete.pending
      ),
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        startPostFetchAll.rejected,
        startPostFetchByUser.rejected,
        startPostCreate.rejected,
        startPostDelete.rejected
      ),
      (state) => {
        state.loading = false;
      }
    );
    builder.addMatcher(
      isAnyOf(startPostFetchAll.fulfilled),
      (state, { payload }) => {
        state.postList = payload.posts;
        state.loading = false;
      }
    );
    builder.addMatcher(
      isAnyOf(startPostCreate.fulfilled),
      (state, { payload }: any) => {
        state.postList = [payload.post, ...state.postList];
        state.loading = false;
      }
    );
    builder.addMatcher(
      isAnyOf(startPostDelete.fulfilled),
      (state, { payload }: any) => {
        console.log(payload.id, parseInt(payload.id));
        state.postList = state.postList.filter(
          (post) => post.id !== parseInt(payload.id)
        );
        state.loading = false;
      }
    );
  },
});

export const startPostFetchAll = createAsyncThunk(
  'post/fetchAllPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await postServices.postFetchAll();
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startPostFetchByUser = createAsyncThunk(
  'post/fetchPostsByUser',
  async (id: number, { rejectWithValue }) => {
    try {
      return await postServices.postFetchByUser(id);
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startPostCreate = createAsyncThunk(
  'post/createPost',
  async (
    data: { text: string; image: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const answ = await postServices.postCreate(data);
      if (answ.ok) {
        dispatch(authActions.handlePostQuantity(1));
        return answ;
      }
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startPostDelete = createAsyncThunk(
  'post/deletePost',
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const answ = await postServices.postDelete(id);
      if (answ.ok) {
        dispatch(authActions.handlePostQuantity(-1));
        return answ;
      }
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);
