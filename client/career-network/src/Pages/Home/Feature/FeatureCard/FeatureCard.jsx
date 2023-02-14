import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const FeatureCard = ({ feature }) => {
    const { _id, job_title, duty_hours, location, salary, skills, experience, deadline, image } = feature;
    return (
        <Link to={`/jobdetails/${_id}`}>
        <div className="card lg:card-side shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
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

export default FeatureCard;