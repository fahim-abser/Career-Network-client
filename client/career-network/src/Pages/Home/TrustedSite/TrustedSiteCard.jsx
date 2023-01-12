import React from 'react';

const TrustedSiteCard = ({ logo }) => {
    return (

        <a href="/">
            <div className='grid mx-5'>
                <img className='lg:w-40 lg:h-20 md:w-36 md:h-12 sm:w-24 sm:h-12' src={logo} alt="" />
            </div>
        </a>
    );
};

export default TrustedSiteCard;