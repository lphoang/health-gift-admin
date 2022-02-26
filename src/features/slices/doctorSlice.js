import { createSlice } from "@reduxjs/toolkit";
import {
  getError,
  getErrorMsg,
  getSuccess,
  getLoading,
  getInitialApi,
  getInitialDoctorInfo,
} from "../../api/initialInformation";
import api from "../../api/commonActions";

const initialDoctors = [];
const initialState = {
  apiState: getInitialApi(),
  doctors: initialDoctors,
  doctor: getInitialDoctorInfo(),
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
  dispatch(actions.loading);
  try {
    const response = await api().doctor().getAllDoctors();
    dispatch(actions.doctorsDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const getDoctor = (id) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().doctor().getDoctor(id);
    dispatch(actions.doctorDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const actions = doctorSlice.actions;

export const selectApiState = (state) => state.auth.apiState;

export default doctorSlice.reducer;
