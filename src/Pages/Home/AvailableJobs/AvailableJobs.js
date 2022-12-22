import React from 'react';

const AvailableJobs = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-3 m-10'>
            <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AvailableJobs;