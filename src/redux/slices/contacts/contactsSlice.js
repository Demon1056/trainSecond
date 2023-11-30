import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  fetchAllContact,
  addContact,
  deleteContact,
} from './contactsOperations';
import { getActionsByType } from 'utils/utils';
import {
  fulfilledFunction,
  pendingFunction,
  rejectedFunction,
} from './contactsReduserFunctions';

const actionsArray = [fetchAllContact, addContact, deleteContact];

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
      .addMatcher(
        isAnyOf(...getActionsByType(actionsArray, 'rejected')),
        rejectedFunction
      )
      .addMatcher(
        isAnyOf(...getActionsByType(actionsArray, 'pending')),
        pendingFunction
      )
      .addMatcher(
        isAnyOf(...getActionsByType(actionsArray, 'fulfilled')),
        fulfilledFunction
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
