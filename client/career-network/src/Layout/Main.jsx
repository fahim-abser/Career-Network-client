import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../Context/AuthProvider';

const Main = () => {
    const {setMenu}=useContext(AuthContext)
    return (
        <div>
            <Navbar></Navbar>
            <div onClick={()=>setMenu(true)}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;