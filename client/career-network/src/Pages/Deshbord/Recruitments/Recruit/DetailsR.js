import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsR = () => {
    const det = useLoaderData();
    console.log(det);
    const { data: details = [], refetch } = useQuery({
        queryKey: [],
        queryFn: (async () => {
            const res = await fetch(`http://localhost:5000/applieddetails/${det[0]?.jobId}`)
            const data = res.json()
            return data
        })
    })
    console.log(details)


    const handleDeleteApplicant = detail => {
        fetch(`http://localhost:5000/deleteApplicant/${detail._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${detail.applicant_email} deleted successfully`)
                }
            })
    }
    return (
        <div className='m-5'>
            <h2 className="text-3xl p-3 font-bold text-sky-900 text-center">{det[0].job_title}</h2>
            <h3 className="text-2xl p-3 font-bold text-sky-900 text-center">Total {det.length} applicant applied in this job</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Applicant Mail</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details?.map((detail, i) => <tr key={detail._id}>
                                <th>{i + 1}</th>
                                <td>{detail?.applicant_email}</td>
                                <td>{detail && <Link><button className='btn btn-xs btn-info'>Details</button></Link>}</td>
                                <td>{detail && <button onClick={() => handleDeleteApplicant(detail)} className='btn btn-xs btn-error'>Remove This Seeker</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DetailsR;