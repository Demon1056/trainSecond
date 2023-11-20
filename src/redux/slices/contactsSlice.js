import { createSlice } from "@reduxjs/toolkit";
import { fetchAllContact, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
    name:"contacts",
    initialState:  {
      items: [],
      isLoading: false,
      error: null},
     extraReducers: (builder)=>{
      builder.addCase(fetchAllContact.pending, (state)=>{
        state.error=null
        state.isLoading=true ; 
      })
      .addCase( fetchAllContact.fulfilled, (state, action)=>{
        state.error=null
        state.items=action.payload ; 
        state.isLoading=false; 
      })
     .addCase(fetchAllContact.rejected, (state,action)=>{
      state.error=action.payload; 
      state.isLoading=false; 
    })
    .addCase( addContact.pending,(state)=>{
      state.error=null
      state.isLoading=true ; 
    })
    .addCase(addContact.fulfilled, (state,action)=>{
      state.error=null
      state.items.push(action.payload)
      state.isLoading=false; 
    })
      .addCase( addContact.rejected, (state,action)=>{
        state.error=action.payload; 
        state.isLoading=false; 
      })
     .addCase(deleteContact.pending, (state)=>{
      state.error=null
      state.isLoading=true ; 
    })
     .addCase(deleteContact.fulfilled, (state, action)=>{
      state.error=null
      state.isLoading=false;
      state.items = state.items.filter((item)=>item.id!==action.payload)
})
    .addCase(deleteContact.rejected, (state,action)=>{
      state.error=action.payload; 
      state.isLoading=false; 
    })
      
     }}
)

export const contactsReducer=contactsSlice.reducer

