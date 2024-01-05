import * as React from "react";
import {
  Outlet,
  Link,
  useNavigate,
  useParams,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./home/Home";
import Details from "./details/Details";
import { AnimatePresence } from "framer-motion";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "seat/:id",
        element: <Details />
      },
    ],
  },
  /* Other routes */
]);

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />;
    </AnimatePresence>
  )
}

