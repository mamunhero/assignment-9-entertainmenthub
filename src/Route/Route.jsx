import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  }
])

export default Route;