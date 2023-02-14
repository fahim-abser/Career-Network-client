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
        <div className='my-10 py-10 lg:px-14 md:px-24 px-6'>
            <div className=''>
                <h1 className='text-center font-bold text-4xl mb-[40px] font-secondaryFont'>Features Jobs</h1>
                <p>Know your worth and find the job that qualify your life</p>
                <div className='grid lg:grid-cols-2 mt-10 dark:bg-blue-800 gap-6'>
                    {
                        features.map((feature) => <FeatureCard feature={feature} key={feature.id}></FeatureCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feature;