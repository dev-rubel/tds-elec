import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from "./components/context/DefaultContext.jsx";
import 'foundation-sites/dist/css/foundation.min.css';
import "./assets/accordion.css";
import "./assets/styles.css";
import ErrorPage from './components/error-page.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Details from './components/details/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seat/:seatid",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>      
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
