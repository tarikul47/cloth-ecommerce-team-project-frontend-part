import { apiSlice } from "../api/apiSlice";

const catalogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalogs: builder.query({
      query: () => `/catalogs?populate=*`,
    }),
  }),
});
//  export hooks for usage in functional components
export const { useGetCatalogsQuery } = catalogsApi;

// endpoints export
export const { getCatalogs } = catalogsApi.endpoints;
