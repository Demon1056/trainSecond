import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { date } from 'yup';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader= (token)=>axios.defaults.headers.common.Authorization =`Bearer ${token}`
const resetHeader =()=> axios.defaults.headers.common.Authorization = ''

export const fetchAllContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {console.log(new Date());
      const contacts = await axios.get('/contacts');
      
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createUser = createAsyncThunk('user/createUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post(`users/signup`, user);
    setHeader(response.data.token)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
)
export const logInUser = createAsyncThunk('user/logInUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post(`users/login`, user);
    setHeader(response.data.token)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
)

export const logOutOperation = createAsyncThunk('user/logOut', async (_, thunkAPI) => {
  try {
   await axios.post(`users/logout`);
    resetHeader()
    return 
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
)
export const refreshUser = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
  const {token} = thunkAPI.getState().auth
  if (!token){return thunkAPI.rejectWithValue('Unable to fetch user');}
  try {
    console.log(token);
  setHeader(token)
   const res =await axios.get(`users/current`)
   console.log(res.data);
    return res.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
)