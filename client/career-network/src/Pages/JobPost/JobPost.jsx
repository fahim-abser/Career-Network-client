import React from 'react';

const JobPost = () => {
    return (
        <div className='shadow-2xl rounded-md py-10 font-mono w-11/12 mx-auto'>
            <h2 className='text-3xl text-center font-bold'>Get it to your job</h2>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione <br /> veniam dignissimos officiis magnam vel! Dolorum maiores quos autem dolores qui?</p>
            <div className='flex justify-center my-5 gap-x-4'>
                <input className='btn border-none bg-gray-500' type="submit" value="Post A Job" />
                <input className='btn border-none bg-green-400' type="submit" value="Search" />
            </div>
        </div>
    );
};

export default JobPost;