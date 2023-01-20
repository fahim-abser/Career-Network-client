import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Deshbord from "../../Pages/Deshbord/Deshbord";
import UnderDeshbord from "../../Pages/Deshbord/UnderDeshbord/UnderDeshbord";
import Inbox from "../../Pages/Deshbord/Inbox/Inbox";
import Recruitments from "../../Pages/Deshbord/Recruitments/Recruitments";
import Employess from "../../Pages/Deshbord/Employees/Employess";
import Reports from "../../Pages/Deshbord/Reports/Reports";
import Setting from "../../Pages/Deshbord/Setting/Setting";
import Recruit from "../../Pages/Deshbord/Recruitments/Recruit/Recruit";



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
                element:<UnderDeshbord></UnderDeshbord>
            },
            {
                path: "/deshbord/inbox",
                element:<Inbox></Inbox>
            },
            {
                path: "/deshbord/recruitment",
                element: <Recruitments></Recruitments>,
            },
            {
                path:"/deshbord/recruitment/recruit",
                element:<Recruit></Recruit>
            },
            {
                path: "/deshbord/employees",
                element:<Employess></Employess>
            },
            {
                path: "/deshbord/reports",
                element:<Reports></Reports>
            },
            {
                path: "/deshbord/setting",
                element:<Setting></Setting>
            }
        ])
    },
    {
        
    }
])

export default router;