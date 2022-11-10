import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "../features/api/apiSlice";
const { fromJS } = require("immutable");

const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

export const wrapper = createWrapper(makeStore, {
  debug: false,
  //serializeState: (state) => state.toJS(),
  //deserializeState: (state) => fromJS(state),
});
