import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import CreateJob from "../pages/CreateJob";
import Myjobs from "../pages/Myjobs";
import SalaryPage from "../pages/SalaryPage";
import UpdateJob from "../pages/UpdateJob";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/post-job",
            element:<CreateJob/>
        },
        {
            path:"/my-job",
            element:<Myjobs/>
        },
        {
            path:"/salary",
            element:<SalaryPage/>
        },
        {
            path:"/edit-job/:id",
            element:<UpdateJob/>,
            loader:({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/login",
            element:<Login/>
        }

    ]
  },
]);

export default router;
