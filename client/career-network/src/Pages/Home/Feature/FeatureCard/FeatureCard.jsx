import React from 'react';

const FeatureCard = ({feature}) => {
    const {job,category,location,img} = feature;
   
    return (
        <div className="flex flex-col mb-[48px] ml-8">
        <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border ">
            <div className="w-full md:w-1/3  grid place-items-center">
                <img src={img} alt="tailwind logo" className="rounded-xl" />
        </div>
                <div className="w-full md:w-2/3  flex flex-col space-y-2 p-3">
                   
                    <h3 className=" text-gray-800 md:text-2xl text-xl font-bold">{job}</h3>
                    <p className="md:text-lg text-gray-500 text-base ">{category}</p>
                    <div >
                        <div className='marker:text-blue-700 flex gap-2 mb-3'>
                            <li className=' '>{location.one}</li>
                            <li className=''>{location.two}</li>
                        </div>
                    </div>
                    <button type="button" className="w-1/3 p-1  rounded-full dark:bg-green-700 dark:text-white text-sm">Part Time</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;