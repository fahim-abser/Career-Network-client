import React from 'react';
import banner from '../../../others/images/banner.jpeg'

const Banner = () => {

    return (
        <div className="hero min-h-screen w-full mx-auto mt-16" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content font-mono">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">Find the job<br />
                        that fits your life</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='flex justify-center gap-6'>
                        <button className="btn bg-green-400 border-none">Register</button>
                        <button className="btn bg-blue-400 border-none">Find</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;