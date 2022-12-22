import React, { useEffect, useState } from 'react';
import ApplyNowModal from './ApplyNowModal/ApplyNowModal';
import AvailableJob from './AvailableJob';

const AvailableJobs = () => {
const [availableJobs, setAvailableJobs]=useState([])
const [jobType, setJobType]=useState({})
useEffect(()=>{
    fetch('sectors.json')
    .then(res=>res.json())
    .then(data=> setAvailableJobs(data))
},[])

    return (
       <div className='mt-10 '>
        <p className='text-3xl text-center my-3'>Job Categories</p>
      
       <div className='grid lg:grid-cols-3 mb-10 gap-4 '>
            
       {
        availableJobs.map(job=><AvailableJob
        key={job._id}
        job={job}
        setJobType={setJobType}
        ></AvailableJob>)
       }
       
        </div>
        <ApplyNowModal
        jobType={jobType}
        ></ApplyNowModal>
        </div>
    );
};

export default AvailableJobs;