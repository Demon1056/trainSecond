import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  createUser,
  logInUser,
  logOutOperation,
  refreshUser,
} from './operations';

const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLogin: false,
    error: null,
    isLoading: false,
    token: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logInUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOutOperation.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logOutOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {};
        state.token = null;
        state.isLogin = false;
      })
      .addCase(logOutOperation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogin = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlise.reducer;
export const persistedAuthReduсer = persistReducer(persistConfig, authReducer);
