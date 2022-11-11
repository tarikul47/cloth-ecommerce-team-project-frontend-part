import { apiSlice } from "../api/apiSlice";

const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getProductList: builder.query({
      query: () => `/products`,
    }),
    //get single product
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});
//  export hooks for usage in functional components
export const { useGetProductListQuery, useGetProductByIdQuery } = categoriesApi;

// endpoints export
export const { getProductList, getProductById } = categoriesApi.endpoints;
