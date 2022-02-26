import { createSlice } from "@reduxjs/toolkit";
import {
  getError,
  getErrorMsg,
  getSuccess,
  getLoading,
  getInitialUserInfo,
} from "../../api/initialInformation";
import api from "../../api/commonActions";

const initialState = {
  isLogged: false,
  verifiedToken: "",
  accessToken: "",
  user: getInitialUserInfo(),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLogged: (state) => {
      state.isLogged = true;
    },
    setIsNotLogged: (state) => {
      state.isLogged = false;
    },
    authLoading: (state) => {
      state.apiState = getLoading();
    },
    authLogout: () => {
      return initialState;
    },
    authDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.user = action.payload.user;
      state.isLogged = true;
      state.verifiedToken = action.payload.verifiedToken;
      state.accessToken = action.payload.accessToken;
    },
    authError: (state, action) => {
      state.apiState = getError(state.apiState, action.payload);
      state.isLogged = false;
    },
  },
});

export const authLogin =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(actions.authLoading());
    try {
      const response = await api().auth().login({ email, password });
      dispatch(actions.authDone(response.data));
    } catch (error) {
      dispatch(actions.authError(getErrorMsg(error)));
    }
  };

export const authRegister =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    dispatch(actions.authLoading());
    try {
      const response = await api()
        .auth()
        .register({ firstName, lastName, email, password });
      dispatch(actions.authDone(response.data));
    } catch (error) {
      dispatch(actions.authError(getErrorMsg(error)));
    }
  };

export const getUserInfo =
  ({ id, token }) =>
  async (dispatch) => {
    dispatch(actions.authLoading());
    try {
      const response = await api().auth().getUserInfo(token, id);
      dispatch(actions.authDone(response.data));
    } catch (error) {}
  };

export const authLogout = (dispatch) => {
  dispatch(actions.authLoading());
  dispatch(actions.authLogout());
  localStorage.removeItem("state");
};

export const actions = authSlice.actions;

export const selectApiState = (state) => state.auth.apiState;

export const selectIsLogged = (state) => state.auth.isLogged;

export default authSlice.reducer;
