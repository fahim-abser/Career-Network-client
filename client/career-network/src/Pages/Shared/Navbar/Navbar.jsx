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
    const navItems = <>
        <li className='text-center px-4 mx-1 py-1 text-white'><Link>Jobs</Link></li>
        <li className='text-center px-4 mx-1 py-1 text-white'><Link>Blogs</Link></li>
        <li className='text-center px-4 mx-1 py-1 text-white'><Link>About</Link></li>
        {user?.uid ? <> <li gitclassName='text-center px-4 mx-1 py-1 text-white'><Link onClick={handleLogOut}>Logout</Link></li></> : <>
                    <li className='text-center px-4 mx-1 py-1 text-white'><Link to='/login'>Login</Link></li>
                    <li className='text-center px-4 mx-1 py-1 text-white'><Link to='/signup'>Signup</Link></li>
                </>
        }
    </>
    const navItem =["jobs","Blogs","about","login"]
    return (
        <div className='relative'>
            <div className={`navbar max-w-[1250px] mx-auto backdrop-blur-3xl z-10 fixed top-0 lg:bg-transparent lg:text-black ${menu?'bg-transparent text-black duration-200 ease-in':'bg-sky-800 text-slate-200 duration-200 ease-out'}  px-4 `}>
                <div className="navbar-start">
                    <Link className="btn btn-ghost normal-case font-bold text-2xl font-secondaryFont ">Career Network</Link>
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
                <div className={`w-full lg:hidden z-10 fixed bg-sky-700 backdrop-blur-3xl duration-1000 ${menu?'h-0 duration-1000 hidden':" pb-10 duration-1000 block bg-sky-700" }`}>
                    <ul className=''>
                    {navItem.map((item,index) =>(
                        <li key={index} className='py-4 pl-5 capitalize font-bold hover:bg-sky-900'>
                            <Link
                                className={`text-center px-4 mx-1 py-1 text-white ${item ==="login" &&" rounded-full"}`}>
                                {item}
                            </Link>
                        </li>))
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;