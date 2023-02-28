import React, { useContext } from 'react'
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onclickdrawerbutton } from '../../app/DashboardSlice/DashboardSlice';
import { AuthContext } from '../../Context/AuthProvider';

function AdminNavbar() {
    const {state} = useSelector(store=>store.counter)
    const dispatch = useDispatch()
    const {logOut,user} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    // navbar start hare
    return (
    <div className='h-16 sticky top-0 z-20'>
        <div className={`navbar max-w-[1440px] mx-auto backdrop-blur-3xl top-0 bg-transparent text-black px-4 dark:text-white`}>
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
                    <ul className="text-xl font-medium flex items-center gap-4 capitalize">
                        <li onClick={handleLogOut} className="btn buttonPrimary rounded-lg btn-sm border-none">Logout</li>
                        <li className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <img className='h-10 w-10 bg-black rounded-full' src={user?.photoURL} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default AdminNavbar