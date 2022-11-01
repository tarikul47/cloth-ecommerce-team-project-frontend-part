import { apiSlice } from "../api/apiSlice";

const catalogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalogs: builder.query({
      query: () => `/catalogs?populate=*`,
    }),
  }),
});
//  export hooks for usage in functional components
const { useGetCatalogsQuery } = catalogsApi;

// endpoints export
const { getCatalogs } = catalogsApi.endpoints;
