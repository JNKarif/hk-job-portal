import React from 'react';
import AvailableJobs from './AvailableJobs/AvailableJobs';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableJobs></AvailableJobs>
        </div>
    );
};

export default Home;