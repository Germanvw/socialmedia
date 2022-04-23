import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Slices/authSlice';
import { commentSlice } from './Slices/commentSlice';
import { friendSlice } from './Slices/friendSlice';
import { postSlice } from './Slices/postSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    friend: friendSlice.reducer,
    posts: postSlice.reducer,
    comment: commentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
