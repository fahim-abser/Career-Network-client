import React from 'react';
import { BsClock } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { GiMoneyStack } from 'react-icons/gi';

const FeatureCard = ({ feature }) => {
    const { _id, job_title, duty_hours, location, salary, skills, experience, deadline, image,companyName } = feature;
    console.log(feature)
    return (
        <div className="col-span-6 flex justify-between items-center h-full border-2 border-sky-600">
            <div className='flex justify-start items-center'>
                <div>
                    <img className='w-20 m-3' src={image} alt="imgage" />
                </div>
                <div>
                    <h3>{job_title}</h3>
                    <div className='flex justify-between items-center'>
                        <p>{companyName}</p>
                        <p><HiLocationMarker/> {location}</p>
                        <p><BsClock></BsClock>{deadline}</p>
                        <p><GiMoneyStack></GiMoneyStack>  {salary? <span>${salary}k</span>:"negotiable"}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn bg-info hover:bg-info
                btn-sm rounded-none'>onclick</button>
            </div>
        </div>

    );
};

export default FeatureCard;