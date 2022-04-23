import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  FriendRequestListProps,
  InitStateFriendProps,
} from '../../Interfaces/FriendInterfaces';
import { friendServices } from '../Services/friendServices';

const initialState: InitStateFriendProps = {
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
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(startFetchFriends.fulfilled),
        (state, { payload }) => {
          state.friendList = payload.friendList;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(startFetchFriendRequest.fulfilled),
        (state, { payload }) => {
          state.friendRequestList = payload.friendRequestList;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(startAddFriend.fulfilled),
        (state: any, { payload }) => {
          state.loading = false;
          state.friendList.push({ user: payload.user });
        }
      )
      .addMatcher(
        isAnyOf(startFriendRequestResponse.fulfilled),
        (state, { payload }) => {
          state.friendRequestList = state.friendRequestList.filter(
            (frItem: FriendRequestListProps) =>
              frItem.user.id !== payload.friend
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
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const startFetchFriendRequest = createAsyncThunk(
  'friend/startFetchFriendRequest',
  async (_, { rejectWithValue }) => {
    try {
      return await friendServices.fetchFriendRequest();
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startFriendRequestResponse = createAsyncThunk(
  'friend/startFriendRequestResponse',
  async (
    response: { id: number; response: number },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const answ = await friendServices.friendRequestResponse(response);
      if (answ.response === 1) dispatch(startAddFriend(answ.friend));
      return answ;
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startAddFriend = createAsyncThunk(
  'friend/startAddFriend',
  async (id: number, { rejectWithValue }) => {
    try {
      return await friendServices.addFriend(id);
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startRemoveFriend = createAsyncThunk(
  'friend/startRemoveFriend',
  async (id: number, { rejectWithValue }) => {
    try {
      // return await friendServices.removeFriend(id);
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);

export const startFetchFriends = createAsyncThunk(
  'friend/fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      return await friendServices.fetchFriends();
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1]);
    }
  }
);
