import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const navItems = <>
        <li><Link>Jobs</Link></li>
        <li><Link>Blogs</Link></li>
        <li><Link>About</Link></li>

        {
            user?.uid ? <li><Link onClick={handleLogOut}>Logout</Link></li>
                : <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </>
        }
    </>
    return (

        <div className="navbar w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl font-medium">
                        {navItems}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Career Network</a>
            </div>
            <div className="navbar-end hidden lg:flex lg:justify-end">
                <ul className="menu menu-horizontal pe-1 text-xl font-medium">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;