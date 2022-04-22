import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Slices/authSlice';
import { friendSlice } from './Slices/friendSlice';
import { postSlice } from './Slices/postSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    friend: friendSlice.reducer,
    posts: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
