import React from 'react';
import airbrb from '../../../../src/others/TrustedImg/airbrb.png'
import microsoft from '../../../../src/others/TrustedImg/microsoft.png'
import google from '../../../../src/others/TrustedImg/google.png'
import meta from '../../../../src/others/TrustedImg/meta.png'
import samsung from '../../../../src/others/TrustedImg/samsung.png'
import TrustedSiteCard from './TrustedSiteCard';

const TrustedSite = () => {
const logos = [
    airbrb,
    microsoft,
    google,
    meta,
    samsung
]
    return (
        <div className='my-5'>
            <h2 className="text-4xl text-center font-mono">Trusted our side</h2>
            <div className='grid grid-cols-5'>
                {logos.map(logo =><TrustedSiteCard logo={logo}></TrustedSiteCard>)}
            </div>
        </div>
    );
};

export default TrustedSite;