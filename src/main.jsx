import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { GetCartProductData } from "./loader/GetCartProductData.js";
import toast, { Toaster } from 'react-hot-toast';
import LoadingPage from "./components/LoadingPage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,   
    loader: GetCartProductData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: 'loader',
    element: <LoadingPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
