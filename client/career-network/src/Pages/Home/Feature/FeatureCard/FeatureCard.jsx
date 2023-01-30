import React from 'react';

const FeatureCard = ({ feature }) => {
    const { job, category, location, img } = feature;
    return (
        <div className="card h-40 lg:card-side shadow-xl gap-y-4">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                <p className='marker'>{location.one}</p>
                <p className='marker'>{location.two}</p>
                <p>Part Time</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;