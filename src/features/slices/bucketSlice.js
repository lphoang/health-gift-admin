import { createSlice } from "@reduxjs/toolkit";
import {
  getError,
  getErrorMsg,
  getSuccess,
  getLoading,
  getInitialApi,
} from "../../api/initialInformation";
import api from "../../api/commonActions";

const initialState = {
  apiState: getInitialApi(),
  uploadFileUrl: "",
};

const bucketSlice = createSlice({
  name: "buckets",
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.apiState = getLoading();
    },
    uploadSuccess: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.uploadFileUrl = action.payload;
    },
    setEmptyBucket: (state) => {
      state.uploadFileUrl = "";
    },
    error: (state, action) => {
      state.apiState = getError(state.apiState, action.payload);
    },
  },
});

export const uploadFile = (formData) => async (dispatch) => {
  dispatch(actions.loading);
  try {
    const res = await api().bucket().uploadFile(formData);
    dispatch(actions.uploadSuccess(res.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const setEmptyBucket = () => async (dispatch) => {
    dispatch(actions.loading);
    try {
      dispatch(actions.setEmptyBucket());
    } catch (error) {
      dispatch(actions.error(getErrorMsg(error)));
    }
  };

export const actions = bucketSlice.actions;

export const selectApiState = (state) => state.auth.apiState;

export default bucketSlice.reducer;
