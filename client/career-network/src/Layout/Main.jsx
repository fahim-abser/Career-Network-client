import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/Shared/Navbar/Navbar';
import { useDispatch} from 'react-redux';
import { setOnlyMenuTrue } from '../app/AllStateSlice/StateManageSlice';
import Footer2 from '../Pages/Shared/Footer/Footer2';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const dispatch = useDispatch()
    return (
        <div className='font-besicFont'>
            <Navbar></Navbar>
            <div onClick={()=>dispatch(setOnlyMenuTrue())}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;