import React from 'react';

import Categories from '../../Categories/Categories';
import JobPost from '../../JobPost/JobPost';
import Banner from '../Banner/Banner';
import TrustedSite from '../TrustedSite/TrustedSite';
import Feature from '../Feature/Feature/Feature';
import Opinion from '../Opinion/Opinion';
import SearchSection from '../Search_Section/SearchSection';
import State from '../State/State';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Categories></Categories>
            <TrustedSite></TrustedSite>
            <JobPost></JobPost>
            <Feature></Feature>
            <State></State>
            <Opinion></Opinion>
            <SearchSection></SearchSection>

        </div>
    );
};

export default Home;