import React from 'react'
import ReactDOM from 'react-dom/client'
/* Components */
import Home from './components/home/Home.jsx';
import Details from './components/details/Details.jsx';
import Root from './components/layouts/Root.jsx';
import ErrorPage from './components/error-page.jsx';
/* CSS */
import 'foundation-sites/dist/css/foundation.min.css';
import "./assets/accordion.css";
import "./assets/styles.css";
/* React Router */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/seat/:seatid",
        element: <Details />
      },
    ],
  },
  /* Other routes */
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
