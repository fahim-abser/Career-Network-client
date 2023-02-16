import React from 'react';
import { Link } from 'react-router-dom';
// import banner from '../../../others/images/banner.jpeg'

const Banner = () => {

    return (
        <div className=" h-screen w-full mx-auto bg-hero-img bg-center bg-no-repeat bg-cover text-white">
            <div className="grid place-items-center h-full">
                <div className=" w-8/12 mx-auto">
                    <h1 className=" font-bold font-besicFont lg:text-7xl md:text-6xl text-5xl">Find the job
                        that fits your life</h1>
                    <p className="my-5 md:text-lg capitalize">cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='flex justify-center gap-6'>
                        <button className="btn w-32 bg-green-400 hover:bg-green-400 border-none disabled:pointer-events-none">Register</button>
                        <Link to='/contact/email' className="btn w-32 bg-blue-400 hover:bg-blue-400 border-none disabled:pointer-events-none">Contact us</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;