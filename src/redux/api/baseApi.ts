import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-3-inky-eight.vercel.app/api",
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "books",
        method: "POST",
        body: bookData,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useCreateBookMutation } = baseApi;
