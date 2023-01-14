import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ApplyNowModal from './ApplyNowModal/ApplyNowModal';
import AvailableJob from './AvailableJob';

const AvailableJobs = () => {
const [availableJobs, setAvailableJobs]=useState([])
const {user}= useContext(AuthContext)
const navigate = useNavigate()

const [jobType, setJobType]=useState(null)
useEffect(()=>{
    fetch('https://hk-job-portal-server.vercel.app/jobSectors')
    .then(res=>res.json())
    .then(data=>
         { console.log(data)
            setAvailableJobs(data)})
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
        {
            jobType && <>{ user ?
                <ApplyNowModal
                jobType={jobType}
                setJobType={setJobType}
                ></ApplyNowModal> : navigate('/login')
            }

            </> 
        }
        
        </div>
    );
};

export default AvailableJobs;