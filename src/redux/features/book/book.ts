import type { IBook } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface IInitialState {
  books: IBook[];
}
const initialState: IInitialState = {
  books: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      const bookData = action.payload;
      state.books.push(bookData);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
