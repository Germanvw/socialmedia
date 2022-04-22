import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNoToken } from '../../Hooks/useFetch';
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
        isAnyOf(
          startAddFriend.pending,
          startRemoveFriend.pending,
          startFetchFriends.pending,
          startFetchFriendRequest.pending
        ),
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
      )
      .addMatcher(
        isAnyOf(startAddFriend.fulfilled),
        (state: any, action: any) => {
          state.loading = false;
          state.friendList.push({ user: action.payload.user });
        }
      )
      .addMatcher(
        isAnyOf(startFriendRequestResponse.fulfilled),
        (state: any, action: any) => {
          state.friendRequestList = state.friendRequestList.filter(
            (object: any) => object.user.id !== action.payload.friend
          );
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          startFetchFriends.rejected,
          startFetchFriendRequest.rejected,
          startAddFriend.rejected,
          startRemoveFriend.rejected
        ),
        (state: any) => {
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

export const startFriendRequestResponse = createAsyncThunk(
  'friend/startFriendRequestResponse',
  async (response: { id: number; response: number }, thunkAPI) => {
    try {
      const answ = await friendServices.friendRequestResponse(response);
      if (answ.response === 1) {
        thunkAPI.dispatch(startAddFriend(answ.friend));
      }
      return answ;
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const startAddFriend = createAsyncThunk(
  'friend/startAddFriend',
  async (id: number, thunkAPI) => {
    try {
      const answ = await friendServices.addFriend(id);
      const user = await fetchNoToken(`users/${answ.friend}`, {});
      return await user.json();
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const startRemoveFriend = createAsyncThunk(
  'friend/startRemoveFriend',
  async (id: number, thunkAPI) => {
    try {
      // return await friendServices.removeFriend(id);
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
