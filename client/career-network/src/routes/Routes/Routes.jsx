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
import AdminDeshbord from "../../Pages/Admin/AdminDeshbord";
import AdminData from "../../Pages/Admin/AdminData/AdminData";
import JobPage from "../../Pages/JobPage/JobPage"
import RecruiteTable from "../../Pages/Admin/UserTabel/RecruiteTable";
import JobSeekerTabel from "../../Pages/Admin/UserTabel/JobSeekerTabel";
import AdminTable from "../../Pages/Admin/UserTabel/AdminTable";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import JobDetails from "../../Pages/Jobs/JobDetails";
import ContactWithEmail from "../../Pages/ContactWithEmail/ContactWithEmail";
import AddResume from "../../Pages/EmployeeDeshbord/ResumeManager/AddResume";

import AdminRoute from "../../PrivateRoute/AdminRoute";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import CoverLetter from "../../Pages/Blogs/CoverLetter";
import Articles from "../../Pages/Blogs/Articles";
import Payment from "../../Pages/Home/Payment/Payment";
import Blogs from "../../Pages/Blogs/Blogs";
import Resume from "../../Pages/Blogs/Resume"
import MakeResume from "../../Pages/Blogs/MakeResume";
import StepByStep from "../../Pages/Blogs/StepByStep";
import ChooseKey from "../../Pages/Blogs/ChooseKey";
import PostArticle from "../../Pages/Blogs/PostArticle";
import DetailsR from "../../Pages/Deshbord/Recruitments/Recruit/DetailsR";

import AppliedJobs from "../../Pages/EmployeeDeshbord/AppliedJobs/AppliedJobs";
import SavedJobs from "../../Pages/EmployeeDeshbord/SavedJobs/SavedJobs";
import CandidateProfile from "../../Pages/EmployeeDeshbord/CandidateProfile/CandidateProfile";
import CreateProfile from "../../Pages/EmployeeDeshbord/CreateProfile/CreateProfile";
import RProfile from "../../Pages/Deshbord/Recruitments/RProfile/RProfile";









const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact/email',
                element: <ContactWithEmail></ContactWithEmail>
            },
            {
                path: '/blog/interview',
                element: <Blogs></Blogs>
            },
            {
                path: '/blog/resume',
                element: <Resume></Resume>
            },
            {
                path: '/blog/coverletter',
                element: <CoverLetter></CoverLetter>
            },
            {

                path: '/blog/postArticle',
                element: <PostArticle></PostArticle>
            },
            {
                path: '/blog/article',
                element: <Articles></Articles>

            },
            {
                path: '/article',
                element: <Articles></Articles>

            },
            {
                path: '/blog/resume/makeresume',
                element: <MakeResume></MakeResume>
            },
            {
                path: '/step',
                element: <StepByStep></StepByStep>
            },
            {
                path: '/chooseKey',
                element: <ChooseKey></ChooseKey>
            },
            {
                path: '/category/:name',
                element: <Jobs></Jobs>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            },
            {
                path: '/alljobs',
                element: <JobPage></JobPage>,
                loader: () => fetch('http://localhost:5000/alljobs')
            },
            {
                path: '/jobdetails/:jobId',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/alljobs/${params.jobId}`)
            },
            {
                path: '/blog/resume',
                element: <Resume></Resume>
            },
            {
                path: '/blog/coverletter',
                element: <CoverLetter></CoverLetter>
            },
            {
                path: '/blog/article',
                element: <Articles></Articles>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Deshbord></Deshbord></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: "/dashboard",
                element: <UnderDeshbord></UnderDeshbord>
            },
            {
                path: "/dashboard/inbox",
                element: <Inbox></Inbox>
            },
            {
                path: "/dashboard/recruitment",
                element: <Recruitments></Recruitments>,
            },
            {
                path: "/dashboard/recruitment/createjob",
                element: <CreateJob></CreateJob>
            },
            {
                path: "/dashboard/employees",
                element: <Employess></Employess>
            },
            {
                path: "/dashboard/rprofile",
                element: <RProfile></RProfile>
            },
            {
                path: "/dashboard/reports",
                element: <Reports></Reports>
            },
            {
                path: "/dashboard/setting",
                element: <Setting></Setting>
            }

        ])
    },
    {
        path: "/employedashboard",
        element: <PrivateRoute><EmployeeDeshbord></EmployeeDeshbord></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: "/employedashboard",
                element: <EmployeeDetails></EmployeeDetails>
            },
            {
                path: "/employedashboard/resumemanager",
                element: <ResumeManager></ResumeManager>
            },
            {
                path: "/employedashboard/appliedjobs/:email",
                element: <AppliedJobs></AppliedJobs>,
               
            },
            {
                path: "/employedashboard/savedjobs/:email",
                element: <SavedJobs></SavedJobs>,
               
            },
            {
                path: "/employedashboard/candidateprofile/:email",
                element: <CandidateProfile></CandidateProfile>,
                loader: ({ params }) => fetch(`http://localhost:5000/employedashboard/candidateprofile/${params.email}`)
            },
            {
                path: "/employedashboard/createprofile",
                element: <CreateProfile></CreateProfile>
            },
            {
                path: "/employedashboard/addresume",
                element: <AddResume></AddResume>
            },
            {
                path: "/employedashboard/employejobs",
                element: <EmployeJobs></EmployeJobs>
            },
            {
                path: "/employedashboard/myaccount",
                element: <MyAccount></MyAccount>
            },
            {
                path: "/employedashboard/payment/:Id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/addjobs/${params.Id}`)

            },
            {
                path: "/employedashboard/applieddetails/:Id",
                element: <DetailsR></DetailsR>,
                loader: ({ params }) => fetch(`http://localhost:5000/applieddetails/${params.Id}`)
            }
        ])
    },
    {
        path: "/admin",
        element: <AdminRoute><AdminDeshbord></AdminDeshbord></AdminRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: "/admin",
                element: <AdminData></AdminData>
            },
            {
                path: "/admin/recruiter",
                element: <RecruiteTable></RecruiteTable>
            },
            {
                path: "/admin/jobseerker",
                element: <JobSeekerTabel></JobSeekerTabel>
            },
            {
                path: "/admin/admintable",
                element: <AdminTable></AdminTable>
            }
        ])
    }
])

export default router;