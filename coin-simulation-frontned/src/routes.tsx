import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Trade from "./pages/Trade";
import Test from "./test/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "trade",
        element: <Trade />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);
