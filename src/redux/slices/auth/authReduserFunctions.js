export const pendingFunction = state => {
    state.error = null;
    state.isLoading = true;
  };
  
  export const autorithationFunction = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
  };
  export const fulfildAutorithation = state => {
    state.isLoading = false;
    state.isLogin = true;
  };
  export const rejectedFunction = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  export const logOutfunction = state => {
    state.isLoading = false;
    state.user = {};
    state.token = null;
    state.isLogin = false;
  };