import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
// const baseQuery = fetchBaseQuery({
//   baseUrl: process.env.REACT_APP_API_URL,
// });

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
   // baseUrl: process.env.REACT_APP_DEV_API_URL,
    baseUrl: process.env.REACT_APP_DEV_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
   
  }),
});

// export hooks for usage in functional components
export const {
  useGetProductListQuery,
  useGetProductByIdQuery,
  util: { getRunningOperationPromise },
} = apiSlice;
// export endpoints for use is ssr
export const { getProductById, getProductList } =
  apiSlice.endpoints;
