import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { onlyDrawerClick } from '../../app/DashboardSlice/DashboardSlice'


function EmployeeDrawer() {
    const dispatch = useDispatch()
  return (
    <div className=''>
        <div className="">
            <div className="font-besicFont text-white">
                <div className='h-16 flex justify-between items-center pl-6 pr-12'>
                    <h1 className='text-2xl'>Career network</h1>
                    <button onClick={()=>dispatch(onlyDrawerClick())} className='text-2xl'><RxCross1 className='sm:hidden'/></button>
                </div>
                <ul className="menu p-4 text-white">
                    <li><Link to="/employedashboard" className="dashboardnavbar">deshbord</Link></li>
                    <li><Link to={"/employedashboard/resumemanager"} className="dashboardnavbar" >Resume</Link></li>
                    <li><Link to={"/employedashboard/employejobs"}className="dashboardnavbar">jobs</Link></li>
                    <li><Link to={"/employedashboard/myaccount"}className="dashboardnavbar">account</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDrawer