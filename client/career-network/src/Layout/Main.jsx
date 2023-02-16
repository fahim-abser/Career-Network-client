import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { useDispatch} from 'react-redux';
import { setOnlyMenuTrue } from '../app/AllStateSlice/StateManageSlice';
import Footer2 from '../Pages/Shared/Footer/Footer2';

const Main = () => {
    const dispatch = useDispatch()
    return (
        <div className='font-besicFont'>
            <Navbar></Navbar>
            <div onClick={()=>dispatch(setOnlyMenuTrue())}>
                <Outlet></Outlet>
            </div>
            <Footer2></Footer2>
        </div>
    );
};

export default Main;