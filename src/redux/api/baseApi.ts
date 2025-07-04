import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-3-inky-eight.vercel.app/api",
  }),
  tagTypes: ["book", "borrow"],

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
    }),
    //borrow book
    borrowBookById: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book"],
    }),
    getBorrowBooks: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useGetBookByIdQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookByIdMutation,
  useGetBorrowBooksQuery,
} = baseApi;
