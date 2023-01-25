import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobsCard from './JobsCard';

const Jobs = () => {
    const jobs = useLoaderData()
    return (
        <div className=''>
            <h2 className="text-center text-2xl">{jobs.category_name}</h2>
            {
                jobs.map(job =><JobsCard key={job._id} job={job}></JobsCard>)
            }
        </div>
    );
};

export default Jobs;