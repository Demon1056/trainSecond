import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { getActionsByType } from 'utils/utils.js';

import {
  createUser,
  logInUser,
  logOutOperation,
  refreshUser,
} from './authOperations.js';

import {
  pendingFunction,
  autorithationFunction,
  fulfildAutorithation,
  rejectedFunction,
  logOutfunction,
} from './authReduserFunctions.js';

const actionsArray = [createUser, logInUser, logOutOperation, refreshUser];

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
      .addCase(logOutOperation.fulfilled, logOutfunction)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(
        isAnyOf(...getActionsByType(actionsArray, 'rejected')),
        rejectedFunction
      )
      .addMatcher(
        isAnyOf(...getActionsByType(actionsArray, 'pending')),
        pendingFunction
      )
      .addMatcher(
        isAnyOf(
          createUser.fulfilled,
          logInUser.fulfilled,
          refreshUser.fulfilled
        ),
        fulfildAutorithation
      )
      .addMatcher(
        isAnyOf(createUser.fulfilled, logInUser.fulfilled),
        autorithationFunction
      );
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlise.reducer;
export const persistedAuthReduсer = persistReducer(persistConfig, authReducer);
