import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div className='px-10 bg-zinc-100'>
            <p className='text-red-500 font-bold text-center'>Something went wrong!!!</p>
            <p className='text-red-400 text-center'>{error.statusText || error.message}</p>
        </div>
    );
};

export default DisplayError;