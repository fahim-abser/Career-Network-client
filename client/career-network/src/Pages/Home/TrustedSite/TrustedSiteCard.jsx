import React from 'react';

const TrustedSiteCard = ({ logo }) => {
    return (
            <div>
                <a href={logo.link} target={'_blank'}>
                    <div className='flex justify-center h-full lg:p-10'>
                        <img className='lg:h-24 md:h-20 h-16 hover:animate-waving-hand' src={logo.type} alt="" />
                    </div>
                </a>
            </div>
    );
};

export default TrustedSiteCard;