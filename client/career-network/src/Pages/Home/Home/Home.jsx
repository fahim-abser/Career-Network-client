import React from 'react';
import Categories from '../../Categories/Categories';
import Banner from '../Banner/Banner';
import TrustedSite from '../TrustedSite/TrustedSite';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Categories></Categories>
                <TrustedSite></TrustedSite>
        </div>
    );
};

export default Home;