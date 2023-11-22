import { createSlice } from "@reduxjs/toolkit";
import { createUser, logInUser, logOutOperation } from "./operations";

const authSlise = createSlice({
    name: 'auth',
    initialState: {
      user: {},
      isLogin: false,
      error: null,
      isLoading: false,
      token:null,
    },
    extraReducers: builder => {
        builder.addCase(createUser.pending, (state)=>{
           state.error=null
            state.isLoading= true})
            .addCase(createUser.fulfilled, (state, action)=>{
                state.isLoading =false
                state.user=action.payload.user
                state.token=action.payload.token
                state.isLogin = true
            })
            .addCase(createUser.rejected, (state,action)=>{
                state.isLoading =false
                state.error=action.payload  
            }).addCase(logInUser.pending, (state)=>{
                state.error=null
                 state.isLoading= true})
                 .addCase(logInUser.fulfilled, (state, action)=>{
                     state.isLoading =false
                     state.user=action.payload.user
                     state.token=action.payload.token
                     state.isLogin = true
                 })
                 .addCase(logInUser.rejected, (state,action)=>{
                     state.isLoading =false
                     state.error=action.payload  
                 }).addCase(logOutOperation.pending, (state)=>{
                    state.error=null
                     state.isLoading= true})
                     .addCase(logOutOperation.fulfilled, (state, action)=>{
                         state.isLoading =false
                         state.user={}
                         state.token=null
                         state.isLogin = false
                     })
                     .addCase(logOutOperation.rejected, (state,action)=>{
                         state.isLoading =false
                         state.error=action.payload  
                     })
        }
})

export const authReducer = authSlise.reducer