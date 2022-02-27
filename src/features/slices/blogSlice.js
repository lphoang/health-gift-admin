import { createSlice } from "@reduxjs/toolkit";
import {
  getError,
  getErrorMsg,
  getSuccess,
  getLoading,
  getInitialApi,
  getInitialBlogInfo,
} from "../../api/initialInformation";
import api from "../../api/commonActions";

const initialBlogs = [];
const initialState = {
  apiState: getInitialApi(),
  blogs: initialBlogs,
  blog: getInitialBlogInfo(),
};

const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.apiState = getLoading();
    },
    blogsDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.blogs = action.payload;
    },
    blogDone: (state, action) => {
      state.apiState = getSuccess(state.apiState);
      state.blog = action.payload;
    },
    error: (state, action) => {
      state.apiState = getError(state.apiState, action.payload);
    },
  },
});

export const getAllBlogs = () => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().blogs().getAllBlogs();
    dispatch(actions.blogsDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const getBlog = (id) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().blogs().getBlog(id);
    dispatch(actions.blogDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const createBlog = (request, token) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().blogs().create(request, token);
    dispatch(actions.blogDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const updateBlog = (request, token, id) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().blogs().update(request, token, id);
    dispatch(actions.blogDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const deleteBlog = (token, id) => async (dispatch) => {
  dispatch(actions.loading());
  try {
    const response = await api().blogs().delete(token, id);
    dispatch(actions.blogDone(response.data));
  } catch (error) {
    dispatch(actions.error(getErrorMsg(error)));
  }
};

export const actions = blogSlice.actions;

export const selectApiState = (state) => state.auth.apiState;

export default blogSlice.reducer;
