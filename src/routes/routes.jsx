import { createBrowserRouter } from "react-router";
import App from "../App";
import IndexLayout from "../layouts/IndexLayout";
import Search from "../pages/search/Search";
import Movies from "../pages/search/Movies";
export const router = createBrowserRouter([
  { Component: IndexLayout,
    children: [
      {index: true, Component: App},
    ],
  },
  { path: "/search",
    Component: Search,
    children: [
      {path: "movie?", Component: Movies},
      {path: "tv?", Component: Movies},
      {path: "anime?", Component: Movies},
      {path: "people?", Component: Movies},
    ],
  },
]);