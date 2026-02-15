import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import ProductDetails from "./pages/productDetails/ProductDetails";
import FlashSell from "./pages/flashSell/FlashSell";
import Brand from "./pages/brand/Brand";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import Category from "./pages/category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product", element: <Product /> },
      { path: "/product-details/:id", element: <ProductDetails /> },
      { path: "/flash-sell", element: <FlashSell /> },
      { path: "/brand", element: <Brand /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog-details/:id", element: <BlogDetails /> },
      { path: "/category", element: <Category /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
