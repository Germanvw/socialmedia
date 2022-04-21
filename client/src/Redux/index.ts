import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Slices/authSlice';
import { friendSlice } from './Slices/friendSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    friend: friendSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
