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
        <div className='mt-10 pt-10 pb-16 lg:px-14 md:px-24 px-6 bg-home dark:bg-slate-800'>
            <div className=''>
                <div className='text-center'>
                    <h1 className=' font-bold text-4xl mb-2 text-sky-800 dark:text-home'>Features Jobs</h1>
                    <p>Know your worth and find the job that qualify your life</p>
                </div>
                <div className='grid lg:grid-cols-2 mt-10 gap-6'>
                    {
                        features.map((feature) => <FeatureCard feature={feature} key={feature.id}></FeatureCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feature;