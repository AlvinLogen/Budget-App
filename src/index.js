import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from './common/layout/landing-page-layout';

import './index.css';
import ErrorPage from './common/error-page/error-page';
import MonthlyPlanner from './components/monthly-planner/monthly-planner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MonthlyPlanner />,
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

