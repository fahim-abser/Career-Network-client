import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { onlyDrawerClick } from '../../app/DashboardSlice/DashboardSlice'

function AdminDrawer() {
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
                        <li><Link to="/admin" className='dashboardnavbar'>my dashboard</Link></li>
                        <li><Link to={"/admin/recruiter"} className="dashboardnavbar">recriterDetails</Link></li>
                        <li><Link to={'/admin/jobseerker'} className="dashboardnavbar">seekerDetails</Link></li>
                        <li><Link to={"/admin/admintable"} className="dashboardnavbar">admindetails</Link></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default AdminDrawer