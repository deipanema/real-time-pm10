import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import AllSidoList from "./pages/AllSidoList";
import MyRegion from "./pages/MyRegion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <AllSidoList /> },
      { path: "region", element: <MyRegion /> },
      { path: "Bookmark", element: <Bookmark /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
