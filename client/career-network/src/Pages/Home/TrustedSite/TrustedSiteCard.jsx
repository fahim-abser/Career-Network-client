import React from 'react';

const TrustedSiteCard = ({ logo }) => {
    return (
        <a href={logo.link} target={'_blank'}>
            <div className='flex justify-center h-full p-10'>
                <img className='h-24 md:h-30 lg:h-full hover:animate-waving-hand' src={logo.type} alt="" />
            </div>
        </a>
    );
};

export default TrustedSiteCard;