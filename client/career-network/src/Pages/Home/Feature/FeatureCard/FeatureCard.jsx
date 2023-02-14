import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const FeatureCard = ({ feature }) => {
    const { _id, job_title, location, companyName, salary,image } = feature;
    return (
        <Link to={`/jobdetails/${_id}`}>
        <div className="flex justify-start items-stretch shadow-md h-40 gap-2 bg-white hover:shadow-slate-700 shadow-slate-300 rounded-lg transition-all duration-500">
            <div className=''>
                <img className='h-full p-2' src={image} alt="jobImage" />
            </div>
            <div className=" w-full h-full flex flex-col justify-evenly">
                <h2 className="text-2xl font-semibold text-sky-800">{job_title}</h2>
                <p className="flex items-center gap-2">
                        <MdWork className='text-sky-600' /> {companyName}
                </p>
                <div className='flex justify-start items-center gap-4'>
                    <p className="flex items-center gap-2">
                        <MdLocationPin className='text-sky-600' />
                        {location}
                    </p>
                    <p className="flex items-center gap-2">
                        <GiMoneyStack className='text-sky-600' />
                        {salary ? <span>$ {salary}k</span>:"negotiable"}
                    </p>
                    <p className="flex items-center gap-2">
                        <BsCalendar2DateFill className='text-sky-600' />
                        11 hour ago
                    </p>
                </div>
            </div>
        </div>
    </Link>

    );
};

export default FeatureCard;