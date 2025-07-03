import App from "@/App";
import AddBook from "@/pages/AddBook";
import AllBook from "@/pages/AllBook";
import EditBook from "@/pages/EditBook";
import ViewDetails from "@/pages/ViewDetails";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
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
    ],
  },
]);
