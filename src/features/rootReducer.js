import authReducer from "./slices/authSlice";
import blogReducer from "./slices/blogSlice";
import specialistReducer from "./slices/specialistSlice";
import certificateReducer from "./slices/certificateSlice";
import diseaseReducer from "./slices/diseaseSlice";
import doctorReducer from "./slices/doctorSlice";
import bucketReducer from "./slices/bucketSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  auth: authReducer,
  certificates: certificateReducer,
  blogs: blogReducer,
  diseases: diseaseReducer,
  specialists: specialistReducer,
  doctors: doctorReducer,
  buckets: bucketReducer,
});
