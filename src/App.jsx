import { React, useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import AddProduct from "./pages/AddProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
