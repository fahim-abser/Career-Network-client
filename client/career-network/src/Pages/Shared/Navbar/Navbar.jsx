import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { onSetTheme, setMenu } from '../../../app/AllStateSlice/StateManageSlice';
import { MdArrowDropDown, MdNotificationsNone } from 'react-icons/md';
import { useState } from 'react';
import useGetNotifications from '../../../hooks/useGetNotifications';
import moment from 'moment/moment';
import useGetUnreadNotNum from '../../../hooks/useGetUnreadNotNum';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const { menu, them } = useSelector(store => store.state)



    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const notInfo = useGetNotifications(user?.email)
    const notCounts = useGetUnreadNotNum(user?.email, 'unread', loading)
    // notification

    // console.log(notInfo.length)

    const handleNotification = () => {
        setLoading(true)
        const url = `http://localhost:5000/notifications?email=${user?.email}`
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: "read" })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const { data: condition = {} } = useQuery({
        queryKey: [user],
        queryFn: (async () => {
            const res = await fetch(`http://localhost:5000/checkit?email=${user?.email}`)
            const data = await res.json()
            return data
        })

    })

    const navItems = <>
        <button onClick={() => dispatch(onSetTheme())} className=' mt-1 text-md w-full'><li className={` listItem  ${menu ? 'text-black' : "text-white lg:text-black"}`}>{them === false ? <BsMoonFill /> : <BsFillSunFill className='text-yellow-600' />}</li></button>
        <Link to="/alljobs"><li className={`listItem ${menu ? 'text-black' : "text-white lg:text-black"} `}>Jobs</li></Link>
        <li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"}`}><div className="dropdown">
            <label tabIndex={0} className="flex">Blogs <div className='grid items-center ml-2'><MdArrowDropDown></MdArrowDropDown></div></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-black lg:bg-base-100 rounded-box w-52">
                <li className='text-sm hover:bg-blue-400 lg:text-black'><Link to='/blog/interview'>Interview Tips</Link></li>
                <li className='text-sm hover:bg-blue-400 lg:text-black'><Link to='/blog/resume'>Resume Building Tips</Link></li>
                <li className='text-sm hover:bg-blue-400 lg:text-black'><Link to='/blog/coverletter'>Cover Letter Tips</Link></li>
                <li className='text-sm hover:bg-blue-400 lg:text-black'><Link to='/article'>Articles</Link></li>
                <li className='text-sm hover:bg-blue-400 lg:text-black'><Link to='/blog/postArticle'>Post An Article</Link></li>
            </ul>
        </div></li>
        <Link><li className={` listItem ${menu ? "text-black" : "text-white lg:text-black"}`}>About</li></Link>
        {user?.uid ? <>
            {condition?.role === "recruiter" && <Link to={"/dashboard"}><li className={`listItem ${menu ? "text-black dark:text-white" : "text-white lg:text-black"} `}>RDashboard</li></Link>}
            {condition?.role === "seeker" && <Link to={"/employedashboard"}><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>SDashboard</li></Link>}
            {condition?.role === "admin" && <Link to={"/admin"}><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Dashboard</li></Link>}
            <Link onClick={handleLogOut}><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Logout</li></Link>
        </> : <>
            <Link to='/login'><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Login</li></Link>
            <Link to='/signup'><li className={`listItem ${menu ? "text-black" : "text-white"}`}>Signup</li></Link>
        </>


        }

        {/* notification */}
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <button onClick={() => handleNotification()} className='text-2xl'> <MdNotificationsNone /></button>


                    {
                        notCounts.length > 0 ? <span className="badge bg-red-600  top-0.5 right-0.5 badge-sm indicator-item">{notCounts?.length}</span> : ''
                    }


                </div>

            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-96 bg-base-100  shadow">
                <div className="card-body">
                    <p className='text-lg font-bold mt-0'>Notifications</p>
                    <div className='divider -mt-1 mb-0'></div>

                    {

                        notInfo?.map(notification => <div className='bg-base-100 shadow-xl rounded' key={notification._id}>
                            <p className='p-3'>{notification.applicant_name} has applied for your job post {notification.job_title} <span className=''>--{moment(notification.createdAt).fromNow()}</span></p>

                        </div>)

                    }

                </div>
            </div>
        </div>
        {/* modal */}
    </>
    return (
        <div className={`relative h-16 `}>
            <div className={`navbar max-w-[1440px] mx-auto backdrop-blur-3xl z-10 fixed top-0 lg:text-black ${menu ? 'bg-transparent text-black duration-200 ease-in' : 'bg-sky-800 dark:bg-black text-slate-200 duration-200 ease-out'}  px-4 dark:text-white `}>
                <div className="navbar-start">
                    <Link to={'/'} className="btn  normal-case btn-ghost font-bold text-2xl font-besicFont ">Career Network</Link>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown">
                        <label onClick={() => dispatch(setMenu())} className="btn btn-ghost lg:hidden">
                            <i className=''>{menu ? <FiMenu className='text-3xl'></FiMenu> : <RxCross1 className='text-3xl '></RxCross1>}</i>
                        </label>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="text-xl font-medium flex items-center justify-center">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className={`w-full lg:hidden  z-10 top-16 fixed bg-sky-700 dark:bg-black backdrop-blur-3xl duration-1000 ${menu ? 'h-0 duration-1000 hidden' : " pb-10 duration-1000 block bg-sky-700"}`}>
                    <ul className='text-lg '>
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;