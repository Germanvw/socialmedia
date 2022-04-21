import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  validating: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    authLogin(state, action) {
      state = {
        ...state,
        user: action.payload,
      };
    },
    authLogout(state) {
      state = {
        ...state,
        user: null,
      };
    },
  },
});

export const actions = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
// // import { authReducer } from './Reducer/authReducer';

// export const store = configureStore({
//   // reducer: {
//   //   auth: authReducer,
//   // },
// });

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
