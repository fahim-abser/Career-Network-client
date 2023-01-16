import React from 'react';
import airbrb from '../../../../src/others/TrustedImg/airbrb.png'
import microsoft from '../../../../src/others/TrustedImg/microsoft.png'
import google from '../../../../src/others/TrustedImg/google.png'
import meta from '../../../../src/others/TrustedImg/meta.png'
import amazon from '../../../../src/others/TrustedImg/amazon.png'
import TrustedSiteCard from './TrustedSiteCard';

const TrustedSite = () => {
    const logos = [
        {
            type: airbrb,
            link:"https://www.airbnb.com/"
        },
        {
            type: microsoft,
            link:"https://www.microsoft.com/en-us/"
        },
        {
            type: google,
            link:"https://www.google.com/"
        },
        {
            type: meta,
            link:"https://investor.fb.com/home/default.aspx"
        },
        {
            type: amazon,
            link:"https://www.amazon.com/"
        }
    ]
    return (
        <div className='flex justify-center container mx-auto'>
            <div className='my-5'>
                <h2 className="text-4xl text-center font-semibold mb-6 font-secondaryFont">Trusted our side</h2>
                <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-2'>
                    {logos.map(logo => <TrustedSiteCard logo={logo}></TrustedSiteCard>)}
                </div>
            </div>
        </div>
    );
};

export default TrustedSite;