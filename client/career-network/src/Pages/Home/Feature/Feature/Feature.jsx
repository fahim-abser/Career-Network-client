import React from 'react';
import { featuresData } from '../../../../data/features';
import FeatureCard from '../FeatureCard/FeatureCard';

const Feature = () => {
    const features = featuresData
    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-4xl mb-[40px] font-secondaryFont'>Features Jobs</h1>
            <div className='mx-auto w-9/12  grid lg:grid-cols-2 gap-4'>
                {
                    features.map((feature) =><FeatureCard feature={feature} key={feature.id}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;