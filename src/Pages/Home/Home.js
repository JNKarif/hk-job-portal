import React from 'react';
import JobAdvertised from '../JobsAdvertised/JobAdvertised';
import AvailableJobs from './AvailableJobs/AvailableJobs';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobAdvertised></JobAdvertised>
            <AvailableJobs></AvailableJobs>
        </div>
    );
};

export default Home;