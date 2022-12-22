import React from 'react';

const ApplyNowModal = ({jobType}) => {
    const {type, require, sectors}=jobType
    
    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="apply-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-auto max-w-5xl relative">
  <label htmlFor="apply-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">Job-Type: {type} | Primary requirements: {require} </h3>
 <form>


    
 {/* <label className="label">
    <span className="label-text">Pick the best fantasy franchise</span>
    <span className="label-text-alt">Alt label</span>
  </label> */}
 <select className="select select-bordered w-full max-w-sm m-1 " required>
  <option disabled selected>Select your desired job sector</option>
  {
    sectors?.map(sector => 
        <option
        > {sector}</option>
        )
 }
</select>


 <select className="select select-bordered w-full max-w-sm m-1 " required>
  <option disabled selected>Select your previous job sector</option>
  {
    sectors?.map(sector => 
        <option
        > {sector}</option>
        )
 }
</select>

 <input type="text" placeholder="Your Full Name" className="input input-bordered w-full max-w-sm m-1" required />
 <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-sm  m-1" required />
 <input type="text" placeholder="Your Mobile Number" className="input input-bordered w-full max-w-sm m-1" required />
 <input type="text" placeholder="Your Address" className="input input-bordered w-full max-w-sm m-1" required/>
 <input type="text" placeholder="Job Experince" className="input input-bordered w-full max-w-sm m-1" required/>
 <input type="text" placeholder="Education" className="input input-bordered w-full max-w-sm m-1" required/>
 <input type="text" placeholder="Skills" className="input input-bordered w-full max-w-sm m-1" required/>
 <input type="url" placeholder="Resume google drive link" className="input input-bordered w-full max-w-sm m-1" required />
 <br/>

 <div className="form-control my-2">
  <label className="cursor-pointer justify-center items-center">
  
    <input type="checkbox"  className="checkbox mr-2" required/>
    <span className="label-text">Agree all terms and conditions</span>
  </label>
</div>
<input  className='btn my-2' type="submit" name="" value="Save"/>
 </form>
    {/* <div className="modal-action">
      <label htmlFor="apply-modal" className="btn">Save</label>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default ApplyNowModal;