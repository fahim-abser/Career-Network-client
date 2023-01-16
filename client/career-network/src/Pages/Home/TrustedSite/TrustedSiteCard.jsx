import React from 'react';

const TrustedSiteCard = ({ logo }) => {
    return (
        <a href="/">
            <div className='flex justify-center h-full p-10'>
                <img className='h-24 md:h-30 lg:h-full' src={logo} alt="" />
            </div>
        </a>
    );
};

export default TrustedSiteCard;