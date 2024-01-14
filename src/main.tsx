import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root/root";
import ErrorPage from "./error-page";
import User from "./routes/User/user";
import Album from "./routes/Album/album";
import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "users/:id",
    element: <User />,
  },
  {
    path: "albums/:id",
    element: <Album />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
