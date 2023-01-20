import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
    const [menu,setMenu]=useState(true)
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const navItems =<>
        <li className={`px-4 lg:pl-0 pl-10 mx-1 lg:py-1 py-2 font-besicFont lg:text-black ${menu? 'text-black':"text-white"} hover:bg-sky-900 lg:hover:bg-transparent`}><Link to='/category' className=''>Jobs</Link></li>
        <li className={`px-4 lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link>Blogs</Link></li>
        <li className={`px-4 lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link>About</Link></li>
        <li className={`px-4 lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to={"/deshbord"}>Deshbord</Link></li>
        {user?.uid ? <>
            <li className={`px-4 lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link onClick={handleLogOut}>Logout</Link></li>
        </> : <>
                <li className={`px-4 lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to='/login'>Login</Link></li>
                <li className={`px-4 lg:pl-0 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to='/signup'>Signup</Link></li>
            </>
        }
    </>
    return (
        <div className='relative h-16'>
            <div className={`navbar max-w-[1250px] mx-auto backdrop-blur-3xl z-10 fixed top-0 lg:bg-transparent lg:text-black ${menu?'bg-transparent text-black duration-200 ease-in':'bg-sky-800 text-slate-200 duration-200 ease-out'}  px-4 `}>
                <div className="navbar-start">
                    <Link to={'/'} className="btn btn-ghost normal-case font-bold text-2xl font-besicFont ">Career Network</Link>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown">
                        <label onClick={()=>setMenu(!menu)} className="btn btn-ghost lg:hidden">
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
                <div className={`w-full lg:hidden z-10 top-16 fixed bg-sky-700 backdrop-blur-3xl duration-1000 ${menu?'h-0 duration-1000 hidden':" pb-10 duration-1000 block bg-sky-700" }`}>
                    <ul className='text-lg'>
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;