import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/book/book";
import { baseApi } from "./api/baseApi";
export const store = configureStore({
  reducer: {
    books: bookReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
