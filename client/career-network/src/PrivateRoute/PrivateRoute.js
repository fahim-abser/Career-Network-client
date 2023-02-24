import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import GetLoading from '../components/Loading/GetLoading';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='h-screen grid place-items-center'>
            <GetLoading></GetLoading>
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;