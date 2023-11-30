export const fulfilledFunction = state => {
    state.error = null;
    state.isLoading = false;
  };
  
  export const pendingFunction = state => {
  
    state.error = null;
    state.isLoading = true;
  };
  export const rejectedFunction = (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  };