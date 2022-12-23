import React from 'react';







const ApplyNowModal = ({ jobType, setJobType }) => {
  const { type, require, sectors } = jobType

  
  
  const handleApplyNow = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const address = form.address.value;
    const experience = form.experience.value;
    const education = form.education.value;
    const skill = form.skill.value;
    const desiredJob = form.desiredJob.value;
    const previousJob = form.previousJob.value;
    const urlResume = form.urlResume.value
  
  
    // console.log(name, email, mobile, address, experience,
    // education, skill, desiredJob, previousJob, urlResume)
  
    const applyNow = {
      name,
      email,
      mobile,
      address, experience,
      education,
      skill,
      desiredJob,
      previousJob,
      urlResume
    }
/* we have to send data to the server and once data is saved then close the modal 
and show a toast of confirmantion*/


setJobType(null)
  }
  
  
  
  return (
    <div className=''>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="apply-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  max-w-4xl relative">
          <label htmlFor="apply-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Job-Type: {type} | Primary requirements: {require} </h3>


          <form onSubmit={handleApplyNow}>

            {/* <label className="label">
    <span className="label-text">Pick the best fantasy franchise</span>
    <span className="label-text-alt">Alt label</span>
  </label> */}
            <select name='desiredJob' className="select select-bordered w-full max-w-sm m-1 " required>
              <option disabled selected>Select your desired job sector</option>
              {
                sectors?.map((sector, i) =>
                  <option
                    key={i}
                  > {sector}</option>
                )
              }
            </select>


            <select name='previousJob' className="select select-bordered w-full max-w-sm m-1 " required>
              <option disabled selected>Select your previous job sector</option>
              {
                sectors?.map((sector, i) =>
                  <option
                    key={i}
                  > {sector}</option>
                )
              }
            </select>

            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered w-full max-w-sm m-1" required />
            <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-sm  m-1" required />
            <input type="text" name='mobile' placeholder="Your Mobile Number" className="input input-bordered w-full max-w-sm m-1" required />
            <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-sm m-1" required />
            <input type="text" name='experience' placeholder="Job Experince" className="input input-bordered w-full max-w-sm m-1" required />
            <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-sm m-1" required />
            <input type="text" name='skill' placeholder="Skills" className="input input-bordered w-full max-w-sm m-1" required />
            <input type="url" name='urlResume' placeholder="Resume (google drive link)" className="input input-bordered w-full max-w-sm m-1" required />
            <br />

            <div className="form-control my-2">
              <label className="cursor-pointer justify-center items-center">

                <input type="checkbox" className="checkbox mr-2" required />
                <span className="label-text">Agree all terms and conditions</span>
              </label>
            </div>
            <input className='btn my-2' type="submit" name="" value="Save" />
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