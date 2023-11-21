import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllContact, addContact, deleteContact } from './operations';
const actionsArray = [fetchAllContact, addContact, deleteContact];
const getActionsByType = type => actionsArray.map(action => action[type]);

const fulfilledFunction = state => {
  state.error = null;
  state.isLoading = false;
};

const pendingFunction = state => {
  state.error = null;
  state.isLoading = true;
};
const rejectedFunction = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContact.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addMatcher(isAnyOf(...getActionsByType('rejected')), rejectedFunction)
      .addMatcher(isAnyOf(...getActionsByType('pending')), pendingFunction)
      .addMatcher(isAnyOf(...getActionsByType('fulfilled')), fulfilledFunction);
  },
});

export const contactsReducer = contactsSlice.reducer;
