import React from 'react';

import Categories from '../../Categories/Categories';
import JobPost from '../../JobPost/JobPost';
import Banner from '../Banner/Banner';
import TrustedSite from '../TrustedSite/TrustedSite';
import Feature from '../Feature/Feature/Feature';
import Opinion from '../Opinion/Opinion';
import SearchSection from '../Search_Section/SearchSection';


const Home = () => {
    return (
        <div>

                <Banner></Banner>
                <Categories></Categories>
                <TrustedSite></TrustedSite>
                <JobPost></JobPost>
                <Feature></Feature>
                <Opinion></Opinion>
                <SearchSection></SearchSection>

        </div>
    );
};

export default Home;