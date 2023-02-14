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
        <div className='m-10'>
            <div className='text-center'>
                <h1 className='font-semibold text-secondary text-4xl mb-2'>Features Jobs</h1>
                <p>Know your worth and find the job that qualify your life</p>
            </div>
            <div className='grid grid-cols-12 gap-8'>
                {
                    features.map((feature) => <FeatureCard feature={feature} key={feature.id}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;