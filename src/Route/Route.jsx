import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import CardInfo from "../Components/Cards/CardInfo";
import SingleCard from "../Components/Cards/SingleCard";

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
        path: "/events"
      }
    ]
  }
])

export default Route;



