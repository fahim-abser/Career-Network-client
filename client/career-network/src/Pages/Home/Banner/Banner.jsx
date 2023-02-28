import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import heroImg from '../../../assets/Herobanner/Hero-Career-Page.webp'

const Banner = () => {

    return (
        <div className=" h-screen w-full mx-auto bg-hero-img bg-center bg-no-repeat bg-cover text-white">
            <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center h-full">
                <div className=" md:w-10/12 w-11/12 text-center mx-auto text-slate-800 dark:text-home">
                    <h1 className=" font-bold md:text-7xl  text-6xl">Find the <span className=''>job </span> 
                        that fits your life</h1>
                    <p className="my-5 md:text-lg capitalize text-black">Find your dream job with ease. Our job portal connects you with top employers and offers a wide range of opportunities to suit your skills and experience.</p>
                    <div className=''>
                        <div className=''>
                            <Link to='/alljobs' className="btn w-32 buttonPrimary  border-none disabled:pointer-events-none rounded-full"> <BsSearch className='mr-1'></BsSearch> search</Link>
                        </div>
                    </div>
                </div>
                <div className='lg:block hidden'>
                    <img className='w-ful h-full' src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;