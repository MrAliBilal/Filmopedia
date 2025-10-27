import { createBrowserRouter } from "react-router";
import App from "../App";
import IndexLayout from "../layouts/IndexLayout";

export const router = createBrowserRouter([
  { Component: IndexLayout,
    children: [
      {index: true, Component: App},
    ],
  },
]);