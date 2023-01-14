import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppliedJobs = () => {

    const { user, loading} = useContext(AuthContext)
    const url= `https://hk-job-portal-server.vercel.app/candidatesData?email=${user?.email}`
    const [candidatesData, setCandidateData]=useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCandidateData(data))
    },[url])

    

    // const { data: candidatesDatas = [], isLoading, error } = useQuery({
    //     queryKey: ['candidatesData', user?.email],
    //     queryFn: () => fetch(url)
    //         .then(
    //             (res) => res.json(),
    //         ),
    // })

    if (loading) {
        return <Loading></Loading>
    }

    // if (error) return 'An error has occured:' + error.message

    return (
        <div className='py-20'>
            <p className='text-xl my-3'>My Applied Jobs</p>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Contact Number</th>
                            <th>Address</th>
                            <th>Job Name</th>
                            <th>Job Type</th>
                            <th>Requirements</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            candidatesData.map((candidate, i) =>

                                <tr
                                    key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>{ candidate.mobile}</td>
                                    <td>{ candidate.address}</td>
                                    <td>{ candidate.desiredJob}</td>
                                    <td>{candidate.type}</td>
                                    <td>{candidate.require}</td>
                                    <td><button className='btn btn-primary'>Edit</button></td>
                                    <td><button className='btn btn-secondary'>Delete</button></td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppliedJobs;