import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  currentUser: any; // Replace 'any' with the actual type of currentUser
  isFetching: boolean;
  error: boolean;
}

interface RegisterState {
  isFetching: boolean;
  error: boolean;
  success: boolean;
}

interface LogoutState {
  isFetching: boolean;
  error: boolean;
}

interface AuthState {
  login: LoginState;
  register: RegisterState;
  logout: LogoutState;
}

const initialState: AuthState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  register: {
    isFetching: false,
    error: false,
    success: false,
  },
  logout: {
    isFetching: false,
    error: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },
    updateUserAction: (state, action: PayloadAction<any>) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
    },
    logoutStart: (state) => {
      state.logout.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.logout.isFetching = false;
      state.login.currentUser = null;
    },
    logoutFailed: (state) => {
      state.logout.isFetching = false;
      state.logout.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  updateUserAction
} = authSlice.actions;

export default authSlice.reducer;
