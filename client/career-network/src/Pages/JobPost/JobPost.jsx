import React from 'react';
import { Link } from 'react-router-dom';
import jobImage from '../../assets/job/20221208_220000.jpg'

const JobPost = () => {
    return (
        <div  className='shadow-lg shadow-slate-300 rounded-md w-11/12 mx-auto h-80 text-white'>
            <div className='flex flex-1'>
                <div className='clip-path-mypolygon bg-secondary w-8/12'>
                    <div className='flex flex-col justify-center items-start h-80 pl-20 hover:rounded-3xl'>
                        <h2 className='text-4xl text-center font-bold'>Get it to your job</h2>
                        <p className='my-4 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione <br /> veniam dignissimos officiis magnam vel! Dolorum maiores quos autem dolores qui?</p>
                        <div className='flex justify-center gap-x-4'>
                            <Link to='/dashboard/recruitment/createjob'><button  className='btn border-none bg-button hover:bg-button shadow-md shadow-cyan-800'> Post A Job</button></Link>
                            <input  type="submit" value="" />
                            <input className='btn w-28 border-none shadow-md shadow-cyan-800 bg-secondaryButton hover:bg-secondaryButton' type="submit" value="Search" />
                        </div>
                    </div>
                </div>
                <div className='w-4/12'> 
                    <img className='w-full h-80' src={jobImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default JobPost;