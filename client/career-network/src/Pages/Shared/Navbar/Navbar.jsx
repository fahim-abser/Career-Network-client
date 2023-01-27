import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

import { useQuery } from 'react-query';

const Navbar = () => {
    const [theme, setTheme] = useState('light')
    const { user, logOut ,menu,setMenu} = useContext(AuthContext)

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")

        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
     const { data:condition={} } = useQuery({
        queryKey: [user],
        queryFn:(async()=>{
            const res = await fetch(`http://localhost:5000/checkit?email=${user?.email}`)
            const data = res.json()
            return data
        })
    })
    console.log(condition)
    const navItems = <>
        <li className={`px-4 dark:text-white lg:pl-0 pl-10 mx-1 lg:py-1 py-2 font-besicFont lg:text-black ${menu ? 'text-black' : "text-white"} hover:bg-sky-900 lg:hover:bg-transparent`}><Link to="/alljobs" className=''>Jobs</Link></li>
        <li className={`px-4 dark:text-white lg:pl-0 pl-10 mx-1 lg:py-1 py-2 font-besicFont lg:text-black ${menu ? 'text-black' : "text-white"} hover:bg-sky-900 lg:hover:bg-transparent`}><button onClick={handleTheme} className=''>Theme</button></li>
        <li className={`px-4 dark:text-white lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link>Blogs</Link></li>
        <li className={`px-4 dark:text-white lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link>About</Link></li>
        {user?.uid ? <>
            {condition?.role ==="recruiter" && <li className={`listItem ${menu? "text-black": "text-white"} `}><Link to={"/deshbord"}>Deshbord</Link></li>}
            {condition?.role === "seeker" && <li className={`listItem ${menu ? "text-black" : "text-white"} `}><Link to={"/employedeshbord"}>employeDeshbord</Link></li>}
            {condition?.role === "admin" && <li className={`listItem ${menu ? "text-black" : "text-white"} `}><Link onClick={handleLogOut}>Logout</Link></li>}
            <li className={`listItem ${menu ? "text-black" : "text-white"} `}><Link onClick={handleLogOut}>Logout</Link></li>
        </> : <>
            <li className={`px-4 dark:text-white lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to='/login'>Login</Link></li>
            <li className={`px-4 dark:text-white lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to='/signup'>Signup</Link></li>
        </>

        }
    </>
    return (
        <div className={`relative h-16 `}>
            <div className={`navbar max-w-[1250px]  mx-auto backdrop-blur-3xl z-10 fixed top-0 lg:bg-transparent lg:text-black ${menu ? 'bg-transparent text-black duration-200 ease-in' : 'bg-sky-800 text-slate-200 duration-200 ease-out'}  px-4 dark:text-white `}>
                <div className="navbar-start">
                    <Link to={'/'} className="btn btn-ghost normal-case font-bold text-2xl font-besicFont ">Career Network</Link>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown">
                        <label onClick={() => setMenu(!menu)} className="btn btn-ghost lg:hidden">
                            <i className=''>{menu ? <FiMenu className='text-3xl'></FiMenu> : <RxCross1 className='text-3xl '></RxCross1>}</i>
                        </label>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="text-xl font-medium flex">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className={`w-full lg:hidden  z-10 top-16 fixed bg-sky-700 backdrop-blur-3xl duration-1000 ${menu ? 'h-0 duration-1000 hidden' : " pb-10 duration-1000 block bg-sky-700"}`}>
                    <ul className='text-lg '>
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;