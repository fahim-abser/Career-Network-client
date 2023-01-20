import React from 'react';

const JobsCard = ({ job }) => {
    const {_id, job_title,duty_hours,location, salary } = job
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>Duty Hours : {duty_hours}</p>
                <p>Location : {location}</p>
                <p>Salary : $ {salary}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-link">Details</button>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;