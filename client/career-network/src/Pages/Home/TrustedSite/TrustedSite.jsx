import React from 'react';
import airbrb from '../../../../src/others/TrustedImg/airbrb.png'
import microsoft from '../../../../src/others/TrustedImg/microsoft.png'
import google from '../../../../src/others/TrustedImg/google.png'
import meta from '../../../../src/others/TrustedImg/meta.png'
import amazon from '../../../../src/others/TrustedImg/amazon-removebg-preview.png'
import TrustedSiteCard from './TrustedSiteCard';
import Marquee from 'react-fast-marquee';

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
                <Marquee play="true" speed={"40"} direction="right">
                    <div className='grid grid-cols-5 gap-2'>
                        {logos.map(logo => <TrustedSiteCard logo={logo}></TrustedSiteCard>)}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default TrustedSite;