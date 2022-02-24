import { createSlice } from "@reduxjs/toolkit";
import {
  getError,
  getErrorMsg,
  getSuccess,
  getLoading,
  getInitialApi,
  getInitialDiseaseInfo,
} from "../../api/initialInformation";
import api from "../../api/commonActions";

const initialDiseases = [];
const initialState = {
  apiState: getInitialApi(),
  diseases: initialDiseases,
  disease: getInitialDiseaseInfo(),
};

const diseaseSlice = createSlice({
  name: "diseases",
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.apiState = getLoading();
    },
    diseasesDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.diseases = action.payload;
    },
    diseaseDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.disease = action.payload;
    },
    error: (state, action) => {
      state.apiState = getError(state.apiState, action.payload);
    },
  },
});

export const getAllDiseases = () => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().diseases().getAllDiseases();
    dispatch(actions.diseasesDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const getDisease = (id) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().diseases().getDisease(id);
    dispatch(actions.diseaseDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const createDisease = (request, token) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().diseases().create(request, token);
    dispatch(actions.diseaseDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const updateDisease = (request, token, id) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().diseases().update(request, token, id);
    dispatch(actions.diseaseDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const deleteDisease = (token, id) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const response = await api().diseases().delete(token, id);
    dispatch(actions.blogDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const actions = diseaseSlice.actions;

export const selectApiState = (state) => state.auth.apiState;

export default diseaseSlice.reducer;
