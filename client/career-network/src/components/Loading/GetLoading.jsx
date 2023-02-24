import React from 'react';

const GetLoading = () => {
    return (
        <div className='text-center'>
            <div className="radial-progress animate-spin text-sky-700" style={{ "--value": "70", "--size": "6rem", "--thickness": "10px" }}></div>
        </div>
    );
};

export default GetLoading;