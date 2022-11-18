import { apiSlice } from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getProductList: builder.query({
      query: () => `/product?populate=*`,
    }),
    //get single product
    getProductById: builder.query({
      query: (id) => `product/${id}?populate=*`,
    }),
  }),
});
//  export hooks for usage in functional components
export const { useGetProductListQuery, useGetProductByIdQuery } = productsApi;

// endpoints export
export const { getProductList, getProductById } = categoriesApi.endpoints;
