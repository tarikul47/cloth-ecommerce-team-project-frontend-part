import { apiSlice } from "../api/apiSlice";

const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getCategoryList: builder.query({
      query: () => `/categories?populate=*`,
    }),
    //get single product
    getCategoryById: builder.query({
      query: (id) => `categories/${id}?populate=*`,
    }),
  }),
});
//  export hooks for usage in functional components
export const { useGetCategoryListQuery, useGetCategoryByIdQuery } =
  categoriesApi;

// endpoints export
export const { getCategoryList, getCategoryById } = categoriesApi.endpoints;
