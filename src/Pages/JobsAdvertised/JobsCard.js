import React from 'react';

const JobsCard = ({job}) => {
    const {title, company, salary,jobType,eligibility,programmingLanguages, frameworks, certification}=job
    return (
        <div>
            <div className="card w-84 drop-shadow-xl h-96 bg-base-300 text-primary-content image-full ">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Position: {title}</h2>
    <p>Company Name: {company}</p>
    <p>Yearly Salary: {salary}</p>
    <p>Job Type: {jobType}</p>
    <p>Requirements:</p>
  <p>{eligibility}, {programmingLanguages} {frameworks} {certification}</p>
    <p></p>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobsCard;