import { createSlice } from "@reduxjs/toolkit";
import {
  getError,
  getErrorMsg,
  getSuccess,
  getLoading,
  getInitialApi,
  getInitialSpecialistInfo,
} from "../../api/initialInformation";
import api from "../../api/commonActions";

const initialSpecialists = [];
const initialState = {
  apiState: getInitialApi(),
  specialists: initialSpecialists,
  specialist: getInitialSpecialistInfo(),
};

const specialistSlice = createSlice({
  name: "specialists",
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.apiState = getLoading();
    },
    specialistsDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.specialists = action.payload;
    },
    specialistDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.specialist = action.payload;
    },
    error: (state, action) => {
      state.apiState = getError(state.apiState, action.payload);
    },
  },
});

export const getAllSpecialists = () => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().specialists().getAll();
    dispatch(actions.specialistsDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const getSpecialist = (id) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().specialists().get(id);
    dispatch(actions.specialistDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const createSpecialist = (request, token) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().specialists().create(request, token);
    dispatch(actions.specialistDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const updateSpecialist = (request, token, id) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().specialists().update(request, token, id);
    dispatch(actions.specialistDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const deleteSpecialist = (token, id) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    await api().specialists().delete(token, id);
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const actions = specialistSlice.actions;

export const selectApiState = (state) => state.auth.apiState;

export default specialistSlice.reducer;
