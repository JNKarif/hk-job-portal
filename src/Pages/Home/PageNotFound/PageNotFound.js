import React from 'react';
import pic from '../../../Assets/404-error.jpg'

const PageNotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={pic} alt="" />
                </div>
            </div>
        </div> 
        </div>
    );
};

export default PageNotFound;
