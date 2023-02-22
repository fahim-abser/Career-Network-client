import React, { useState } from 'react'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { onlyDrawerClick } from '../../app/DashboardSlice/DashboardSlice'

function DashboardDrawer() {
    const dispatch = useDispatch()
    const [inboxtoggle, setInboxToggle] = useState(false)
    const [recruiterToggle, setRecruiterToggel] = useState(false)

    return (
        <div className=''>
            <div className="">
                <div className="font-besicFont text-white">
                    <div className='h-16 flex justify-between items-center pl-6 pr-12'>
                        <h1 className='text-2xl'>Career network</h1>
                        <button onClick={() => dispatch(onlyDrawerClick())} className='text-2xl'><RxCross1 className='sm:hidden' /></button>
                    </div>
                    <ul className="menu p-4 text-white ">
                        <li><Link to={"/dashboard"} className="dashboardnavbar">Recruiter</Link>
                        </li>
                        <li><Link to={"/dashboard/rprofile"} className="dashboardnavbar">Profile</Link></li>
                        <li><Link to={"/dashboard/recruitment"} className=" dashboardnavbar">jobs</Link></li>
                        <li onClick={() => setInboxToggle(!inboxtoggle)}><Link className='dashboardnavbar flex items-center justify-between'>inbox {inboxtoggle ? <BsArrowBarLeft className='text-2xl'></BsArrowBarLeft> : <BsArrowBarRight className="text-2xl"></BsArrowBarRight>}</Link></li>
                        <div className='relative'>
                            <ul className={`dropdowntoggle ${inboxtoggle ? "translate-x-0 z-20" : "-translate-x-full opacity-0"}`}>
                                <li><Link className="dashboardnavbar">interview</Link></li>
                                <li><Link className="dashboardnavbar">offer</Link></li>
                                <li><Link className="dashboardnavbar">candidate email</Link></li>
                                <li><Link className="dashboardnavbar">condidate alert</Link></li>
                            </ul>
                        </div>
                        <li onClick={() => setRecruiterToggel(!recruiterToggle)}><Link className="dashboardnavbar flex items-center justify-between">Recruitment {recruiterToggle ? <BsArrowBarLeft className='text-2xl'></BsArrowBarLeft> : <BsArrowBarRight className="text-2xl"></BsArrowBarRight>}</Link></li>
                        <div className='relative'>
                            <ul className={`dropdowntoggle ${recruiterToggle ? "translate-x-0 z-10" : "-translate-x-full opacity-0"}`}>
                                <li><Link className="dashboardnavbar">recruit</Link></li>
                                <li><Link className="dashboardnavbar">conversation</Link></li>
                                <li><Link className="dashboardnavbar">task</Link></li>
                                <li><Link className="dashboardnavbar" to={"/dashboard/recruitment/createjob"}>add jobs</Link></li>
                            </ul>
                        </div>
                        <li><Link className='dashboardnavbar'>Employee</Link></li>
                        <li><Link className="dashboardnavbar">Dashboard</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardDrawer