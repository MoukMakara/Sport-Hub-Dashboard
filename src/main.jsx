import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/layout/Layout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard.jsx";
import Static from "./page/static/Static.jsx";
import User from "./page/users/User.jsx";
import SignIn from "./page/sign-in/SignIn.jsx";
import SignUp from "./page/sign-up/SignUp.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/static",
        element: <Static />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/sign-in",
        element: <SignIn/>,
      },
      {
        path: "/sign-up",
        element: <SignUp/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
