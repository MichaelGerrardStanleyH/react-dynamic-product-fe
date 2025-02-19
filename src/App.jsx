import { React, useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/DetailProduct";
import Add from "./pages/AddDynamicProduct";
import Edit from "./pages/EditDynamicProduct";
import AddProduct from "./pages/AddProduct";
import AddDynamicProduct from "./pages/AddDynamicProduct";
import EditDynamicProduct from "./pages/EditDynamicProduct";
import DetailProduct from "./pages/DetailProduct";

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
      path: "/detail-product",
      element: <DetailProduct />,
    },
    {
      path: "/add-dynamic-product",
      element: <AddDynamicProduct />,
    },
    {
      path: "/edit-dynamic-product",
      element: <EditDynamicProduct />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
