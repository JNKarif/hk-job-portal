import React from 'react';

const AvailableJob = ({job, setJobType}) => {
    const {type, require, sectors}=job
    return (
        <div>
            <div className="card w-84 drop-shadow-xl h-56 bg-base-300 text-primary-content ">
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{type}</h2>
    <p>Primary requirements: {require}</p>
    <p>{sectors.length} jobs available</p>
    <div className="card-actions justify-end">
      
      <label htmlFor="apply-modal" className="btn "
      onClick={()=>setJobType(job)}
      >Apply Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AvailableJob;