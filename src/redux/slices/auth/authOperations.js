import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { setHeader, resetHeader } from 'servise/axiosServise';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`users/signup`, user);
      setHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'user/logInUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`users/login`, user);
      setHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutOperation = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post(`users/logout`);
      resetHeader();
      return;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setHeader(token);
      const res = await axios.get(`users/current`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
