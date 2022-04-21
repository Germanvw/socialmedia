import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { friendServices } from '../Services/friendServices';

const initialState = {
  loading: false,
  friendList: [],
  friendRequestList: [],
};

export const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(startFetchFriends.pending, startFetchFriendRequest.pending),
        (state: any) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(startFetchFriends.fulfilled),
        (state: any, action: any) => {
          state.friendList = action.payload.friendList;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(startFetchFriendRequest.fulfilled),
        (state: any, action: any) => {
          state.friendRequestList = action.payload.friendRequestList;
          state.loading = false;
        }
      );
  },
});

export const startFetchFriendRequest = createAsyncThunk(
  'friend/startFetchFriendRequest',
  async (_, thunkAPI) => {
    try {
      return await friendServices.fetchFriendRequest();
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const startFetchFriends = createAsyncThunk(
  'friend/fetchFriends',
  async (_, thunkAPI) => {
    try {
      return await friendServices.fetchFriends();
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);
