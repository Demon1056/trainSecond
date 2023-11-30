import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setHeader= (token)=>axios.defaults.headers.common.Authorization =`Bearer ${token}`
export const resetHeader =()=> axios.defaults.headers.common.Authorization = ''