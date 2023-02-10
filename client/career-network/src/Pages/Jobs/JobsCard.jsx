import React from 'react';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { MdLocationPin, MdWork } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
    const {_id, job_title, duty_hours, location, salary,skills ,experience,deadline} = job

    return (

    <Link to={`/jobdetails/${_id}`}>
            <div
      
      className="card lg:w-[500px] shadow-xl mt-10 bg-gray-50 dark:bg-blue-800"
    >
      <div className="card-body">
        <h2 className="card-title"></h2>
        <p className="text-xl text-green-500">{job_title}</p>
        <p className="flex items-center gap-2">
          <MdLocationPin />
          {location}
        </p>
        <p className="flex items-center gap-2">
          <FaGraduationCap />
          {skills}
        </p>
        <div className="flex justify-around">
          <p className="flex items-center gap-2">
            <MdWork /> At least {experience}{" "}
            {experience > 1 ? "years" : "year"}
          </p>
          <p className="flex items-center gap-2">
            <BsCalendar2DateFill />
            Deadline: {deadline}
          </p>
        </div>
       
       
      </div>
    </div>
    </Link>
    );
};

export default JobsCard;