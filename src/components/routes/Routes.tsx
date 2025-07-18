import App from "@/App";
import AddBook from "@/pages/AddBook";
import AllBook from "@/pages/AllBook";
import BorrowBook from "@/pages/BorrowBook";
import BorrowSummary from "@/pages/BorrowSummary";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home";
import ViewDetails from "@/pages/ViewDetails";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <AllBook></AllBook>,
      },
      {
        path: "/create-book",
        element: <AddBook></AddBook>,
      },
      {
        path: "/books/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook></EditBook>,
      },
      {
        path: "/borrow/:id",
        element: <BorrowBook></BorrowBook>,
      },
      {
        path: "borrow-summary",
        element: <BorrowSummary></BorrowSummary>,
      },
    ],
  },
]);
