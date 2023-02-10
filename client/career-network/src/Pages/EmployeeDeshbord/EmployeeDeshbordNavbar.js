import React, { useContext, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { onclickdrawerbutton } from '../../app/EmployeSlice/EmployeSlice'
import { AuthContext } from '../../Context/AuthProvider'

function EmployeeDeshbordNavbar() {
  // state context
    const {state} = useSelector(store=>store.counter)
    const dispatch = useDispatch()
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    // navbar list item 
    const navItems =<>
        <li className={`listItem`}><Link to="/employedeshbord" className=''>deshbord</Link></li>
        <li className={`listItem`}><Link to={"/employedashboard/resumemanager"}>Resume</Link></li>
        <li className={`listItem`}><Link to={'/employedashboard/employejobs'}>jobs</Link></li>
        <li className={`listItem `}><Link to={"/employedashboard/myaccount"}>account</Link></li> 
        {user?.uid ? <>
            <li className={`listItem`}><Link onClick={handleLogOut}>Logout</Link></li>
        </> : <>
                <li className={`listItem`}><Link to='/login'>Login</Link></li>
            </>
        }
        <li className="tooltip tooltip-bottom" data-tip="name">
            <img className='h-10 w-10 bg-black rounded-full' src="" alt="" />
        </li>
    </>

    // navbar start hare
    return (
      <div className='h-16 sticky top-0'>
            <div className={`navbar max-w-[1440px] mx-auto backdrop-blur-3xl z-20 top-0 bg-transparent text-black px-4`}>
                <div className="navbar-start">
                    <Link to={'/'} className="btn btn-ghost normal-case font-bold text-2xl font-besicFont ">Career Network</Link>
                </div>
                <div className='navbar-end'>
                    <div className="">
                        <label onClick={()=>dispatch(onclickdrawerbutton())} className="btn btn-ghost lg:hidden">
                            <i className=''>{state ? <RxCross1 className='text-3xl '></RxCross1>:<FiMenu className='text-3xl'></FiMenu>}</i>
                        </label>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="text-xl font-medium flex items-center capitalize">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)}

export default EmployeeDeshbordNavbar