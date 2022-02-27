import { createSlice } from "@reduxjs/toolkit";
import {
  getError,
  getErrorMsg,
  getSuccess,
  getLoading,
  getInitialApi,
  getInitialDoctorInfo,
  getInitialUserInfo,
} from "../../api/initialInformation";
import api from "../../api/commonActions";

const initialDoctors = [];
const initialState = {
  apiState: getInitialApi(),
  doctors: initialDoctors,
  doctor: getInitialDoctorInfo(),
  user: null,
};

const doctorSlice = createSlice({
  name: "doctors",
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.apiState = getLoading();
    },
    doctorsDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.doctors = action.payload;
    },
    userDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.user = action.payload;
    },
    doctorDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.doctor = action.payload;
    },
    error: (state, action) => {
      state.apiState = getError(state.apiState, action.payload);
    },
  },
});

export const getAllDoctors = () => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().doctors().getAllDoctors();
    dispatch(actions.doctorsDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const getDoctor = (id) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().doctors().getDoctor(id);
    dispatch(actions.doctorDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const createDoctor = (request) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().doctors().createDoctor(request);
    dispatch(actions.userDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const updateUserInfo = (request, token, id) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().doctors().updateUserInfo(request, token, id);
    dispatch(actions.userDone(response.data));
  } catch (error) {
    dispatch(actions.authError(getErrorMsg(error)));
  }
};

export const updateDoctor = (request, token, id) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().doctors().updateDoctor(request, token, id);
    dispatch(actions.doctorDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const actions = doctorSlice.actions;

export const selectApiState = (state) => state.auth.apiState;

export default doctorSlice.reducer;
