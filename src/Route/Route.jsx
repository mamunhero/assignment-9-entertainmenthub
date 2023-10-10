import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import SingleCard from "../Components/Cards/SingleCard";
import Event from "../Pages/Event/Event";
import Services from "../Pages/Services/Services";
import Tickets from "../Pages/Tickets/Tickets";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/ErrorPage/Error";
import Blog from "../Pages/Blog/Blog";
import Gallery from "../Pages/Gallery/Gallery";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("/data.json")
      },
      {
        path: "/data/:id",
        element: <PrivateRoute><SingleCard></SingleCard></PrivateRoute>
      },
      {
        path: "/event",
        element: <Event></Event>
      },
      {
        path: "/services",
        element: <PrivateRoute><Services></Services></PrivateRoute>
      },
      {
        path: "/tickets",
        element: <Tickets></Tickets>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      }
    ]
  }
])

export default Route;



