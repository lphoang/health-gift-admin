// import { rootReducer } from './../features/rootReducer';
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./stateLs";

const persistedStore = loadState();

export const store = configureStore({
  preloadedState: persistedStore,
  // reducer: rootReducer,
  devTools: true,
});

store.subscribe(() => {
  saveState(store.getState());
});
