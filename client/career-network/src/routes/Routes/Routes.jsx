import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Deshbord from "../../Pages/Deshbord/Deshbord";
import CreateJob from "../../Pages/Deshbord/Createjob/CreateJob";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    },
    {
        path:"/deshbord",
        element: <Deshbord></Deshbord>,
        children:([
            {
                path: "/deshbord",
                element:<CreateJob></CreateJob>
            }
        ])
    }
])

export default router;