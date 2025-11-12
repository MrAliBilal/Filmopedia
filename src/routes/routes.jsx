import { createBrowserRouter } from "react-router";
import App from "../App";
import IndexLayout from "../layouts/IndexLayout";
import Search from "../pages/search/Search";
export const router = createBrowserRouter([
  { Component: IndexLayout,
    children: [
      {index: true, Component: App},
    ],
  },
  { path: "/search?",
    Component: Search
  },
]);