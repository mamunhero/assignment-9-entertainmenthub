import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import SingleCard from "../Components/Cards/SingleCard";
import Event from "../Pages/Event/Event";
import Services from "../Pages/Services/Services";
import Tickets from "../Pages/Tickets/Tickets";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("/data.json")
      },
      {
        path: "/data/:id",
        element: <SingleCard></SingleCard>
      },
      {
        path: "/event",
        element: <Event></Event>
      },
      {
        path: "/services",
        element: <Services></Services>
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
      }
    ]
  }
])

export default Route;



