import React, { useEffect, useState } from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';

const Feature = () => {
    const [features, setfeature] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/featurejob')
            .then(res => res.json())
            .then(data => setfeature(data));
    }, [])


    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-4xl mb-[40px] font-secondaryFont'>Features Jobs</h1>
            <div className='card lg:w-[700px] shadow-xl mt-10 bg-gray-50 dark:bg-blue-800'>
                {
                    features.map((feature) => <FeatureCard feature={feature} key={feature.id}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;