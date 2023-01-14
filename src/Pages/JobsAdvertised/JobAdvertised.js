import React, { useEffect, useState } from 'react';
import JobsCard from './JobsCard';

const JobAdvertised = () => {

    const [jobs, setJobs]=useState([])
    useEffect(()=>{
        fetch('https://hk-job-portal-server.vercel.app/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 my-10 gap-4'>

            {
                jobs.map((job,i)=>
                <JobsCard
                key={i}
                job={job}
                ></JobsCard>
                )
            }
        </div>
    );
};

export default JobAdvertised;