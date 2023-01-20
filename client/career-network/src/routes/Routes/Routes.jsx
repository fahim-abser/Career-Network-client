import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Jobs from "../../Pages/Jobs/Jobs";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Deshbord from "../../Pages/Deshbord/Deshbord";
import UnderDeshbord from "../../Pages/Deshbord/UnderDeshbord/UnderDeshbord";
import Inbox from "../../Pages/Deshbord/Inbox/Inbox";
import Recruitments from "../../Pages/Deshbord/Recruitments/Recruitments";
import Employess from "../../Pages/Deshbord/Employees/Employess";
import Reports from "../../Pages/Deshbord/Reports/Reports";
import Setting from "../../Pages/Deshbord/Setting/Setting";
import CreateJob from "../../Pages/Deshbord/Recruitments/Createjob/CreateJob";
import EmployeeDeshbord from "../../Pages/EmployeeDeshbord/EmployeeDeshbord";
import EmployeeDetails from "../../Pages/EmployeeDeshbord/EmployeeDetails/EmployeeDetails";
import ResumeManager from "../../Pages/EmployeeDeshbord/ResumeManager/ResumeManager";
import EmployeJobs from "../../Pages/EmployeeDeshbord/EmployeJobs/EmployeJobs";
import MyAccount from "../../Pages/EmployeeDeshbord/MyAccount/MyAccount";
import MyJobsSearch from "../../Pages/EmployeeDeshbord/MyJobsSearch/MyJobsSearch";
import Resources from "../../Pages/EmployeeDeshbord/Resources/Resources";
import Responses from "../../Pages/EmployeeDeshbord/Responses/Responses";



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
            {
                path:'/category/:name',
                element:<Jobs></Jobs>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.name}`)
            }
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
                path:"/deshbord/recruitment/createjob",
                element:<CreateJob></CreateJob>
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
        path: "/employedeshbord",
        element: <EmployeeDeshbord></EmployeeDeshbord>,
        children: ([
            {
                path: "/employedeshbord",
                element:<EmployeeDetails></EmployeeDetails>
            },
            {
                path: "/employedeshbord/resumemanager",
                element:<ResumeManager></ResumeManager>
            },
            {
                path: "/employedeshbord/employejobs",
                element:<EmployeJobs></EmployeJobs>
            },
            {
                path: "/employedeshbord/myaccount",
                element:<MyAccount></MyAccount>
            },
            {
                path: "/employedeshbord/myjobssearch",
                element:<MyJobsSearch></MyJobsSearch>
            },
            {
                path: "/employedeshbord/resources",
                element:<Resources></Resources>
            },
            {
                path: "/employedeshbord/responses",
                element:<Responses></Responses>
            },
        ])
    }
])

export default router;