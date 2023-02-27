import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { onlyDrawerClick } from '../../app/DashboardSlice/DashboardSlice'
import { SlNote } from "react-icons/sl";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineQrcode } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function EmployeeDrawer() {
    const dispatch = useDispatch()
    const {user} = useContext(AuthContext)
  return (
    <div className=''>
        <div className="">
            <div className="font-besicFont text-white">
                <div className='h-16 flex justify-between items-center pl-6 pr-12'>
                    <h1 className='text-2xl'>Career network</h1>
                    <button onClick={()=>dispatch(onlyDrawerClick())} className='text-2xl'><RxCross1 className='sm:hidden'/></button>
                </div>
                <ul className="menu p-4 text-white">
                    <li><Link to="/employedashboard" className="dashboardnavbar"><span><AiOutlineQrcode/></span> dashbord</Link></li>
                    <li><Link to={`/employedashboard/candidateprofile/${user?.email}`} className="dashboardnavbar"><span><CgProfile/></span> Profile</Link></li>
                    <li><Link to="/employedashboard/createprofile" className="dashboardnavbar"><span><CgProfile/></span>Create Profile</Link></li>
                    <li><Link to={"/employedashboard/resumemanager"} className="dashboardnavbar" ><span><HiOutlineDocumentText/></span> Resume</Link></li>
                    <li><Link to={`/employedashboard/appliedjobs/${user?.email}`} className="dashboardnavbar" ><span><FaBriefcase/></span> Applied Jobs</Link></li>
                    <li><Link to={`/employedashboard/savedjobs/${user?.email}`} className="dashboardnavbar" ><span><BsBookmarkCheck/></span> Saved Jobs</Link></li>
                    <li><Link to={"/employedashboard/employejobs"}className="dashboardnavbar"><span><SlNote/></span> My Task</Link></li>
                    <li><Link to={"/employedashboard/myaccount"}className="dashboardnavbar"><span><RiLogoutCircleRLine/></span> Logout</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDrawer