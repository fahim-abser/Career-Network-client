import React from 'react';
import { Link } from 'react-router-dom';
import jobImage from '../../assets/job/20221208_220000.jpg'

const JobPost = () => {
    return (
        <div  className='shadow-lg shadow-slate-300 w-11/12 mx-auto lg:h-80 text-white rounded-2xl lg:rounded-none'>
            <div className='flex flex-1 '>
                <div className='lg:clip-path-mypolygon componetGradient lg:w-8/12 py-10 rounded-2xl lg:rounded-none'>
                    <div className='flex flex-col justify-center lg:items-start items-center lg:h-full lg:pl-20 w-11/12 lg:mx-0 mx-auto '>
                        <h2 className='text-4xl text-center font-bold'>Get it to your job</h2>
                        <p className='my-4 text-lg lg:text-left text-center'>The job market can be tough to navigate, but with our job portal, finding your dream job has never been easier. Our platform connects you with top employers in your field, offering a wide range of job opportunities to suit your skills and experience.</p>
                        <div className='flex justify-center gap-x-4'>
                            <Link to='/dashboard/recruitment/createjob'><button  className='btn border-none buttonPrimary shadow-md shadow-cyan-800'> Post A Job</button></Link>
                            <Link to='/contact/email'><button  className='btn border-none buttonSecondary shadow-md shadow-cyan-800'> contact me</button></Link>
                        </div>
                    </div>
                </div>
                <div className='w-4/12 lg:block hidden'> 
                    <img className='w-full h-80' src={jobImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default JobPost;