import React from 'react';

import Categories from '../../Categories/Categories';
import JobPost from '../../JobPost/JobPost';
import Banner from '../Banner/Banner';
import TrustedSite from '../TrustedSite/TrustedSite';
import Feature from '../Feature/Feature/Feature';
import Opinion from '../Opinion/Opinion';
import SearchSection from '../Search_Section/SearchSection';
import State from '../State/State';
import AllCounting from '../AllCounting/AllCounting';
import Review from '../Review/Review';
import HomeBlog from '../HomeBlog/HomeBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <TrustedSite></TrustedSite>
            <JobPost></JobPost>
            <Feature></Feature>
            {/* <State></State> */}
            <AllCounting></AllCounting>
            <Review></Review>
            <Opinion></Opinion>
            <SearchSection></SearchSection>
            <HomeBlog></HomeBlog>
        </div>
    );
};

export default Home;