import App from "@/App";
import AddBook from "@/pages/AddBook";
import AllBook from "@/pages/AllBook";
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
    ],
  },
]);
