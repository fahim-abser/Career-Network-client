import React from 'react';

const TrustedSiteCard = ({ logo }) => {
    return (

        <a href="/">
            <div className='grid mx-5'>
                <img className='lg:w-40 lg:h-20 md:w-36 md:h-12 sm:w-20 sm:h-9' src={logo} alt="" />
            </div></a>
    );
};

export default TrustedSiteCard;