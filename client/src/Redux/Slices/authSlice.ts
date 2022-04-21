import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { RegisterUser } from '../../Interfaces/UserInterfaces';
import { authServices } from '../Services/authServices';
const initialState = {
  loading: false,
  refreshing: true,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.error = null;
      state.user = null;
      localStorage.removeItem('x-token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          startRegister.fulfilled,
          startLogin.fulfilled,
          startRefreshToken.fulfilled
        ),
        (state, action: any) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload.user;
          localStorage.setItem('x-token', action.payload.token);
        }
      )
      .addMatcher(
        isAnyOf(
          startRegister.rejected,
          startLogin.rejected,
          startRefreshToken.rejected
        ),
        (state, action: any) => {
          state.loading = false;
          state.error = action.payload;
          state.user = null;
          localStorage.removeItem('x-token');
        }
      )
      .addMatcher(
        isAnyOf(
          startLogin.pending,
          startRegister.pending,
          startRefreshToken.pending
        ),
        (state: any) => {
          state.loading = true;
        }
      );
  },
});
export const startRegister = createAsyncThunk(
  'auth/register',
  async (user: RegisterUser, thunkAPI) => {
    try {
      return await authServices.register(user);
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const startLogin = createAsyncThunk(
  'auth/login',
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      return await authServices.login(user);
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const startRefreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    try {
      return await authServices.refreshToken();
    } catch (err: any) {
      const message = err.toString().split(': ')[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const authActions = authSlice.actions;
