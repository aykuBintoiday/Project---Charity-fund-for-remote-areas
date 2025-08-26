import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";       // Layout chính
import Trangchu from "./Components/Home";
import Gioithieu from "./Components/Introduce";
import Chiendich from "./Components/Campaign";
import Quy from "./Components/Budget";
import DangNhap from "./Components/Login";
import ErrorPage from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    errorElement:  <ErrorPage/>,
    children: [ 
      { index: true, element: <Trangchu /> },
      { path: "trangchu", element: <Trangchu /> },
      { path: "gioithieu", element: <Gioithieu /> },
      { path: "chiendich", element: <Chiendich /> },
      { path: "quy", element: <Quy /> },
      { path: "dangnhap", element: <DangNhap /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);