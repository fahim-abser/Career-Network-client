import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AppliedJobs = () => {

    const  user= useContext(AuthContext)
    
    const { data: jobadata = [], refetch } = useQuery({
        queryKey: ['applicant_email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/employedashboard/appliedjobs/${user?.user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(jobadata)
    const handleDelete = (email,id) => {
      
        const url = `http://localhost:5000/deleteAppliedJob?email=${email}&_id=${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                   
              
                    toast.success('Deleted')
                    refetch()
                    
                }
            })
    }
    return (
        <div>
            <div class="flex items-center py-2 overflow-x-auto whitespace-nowrap">
                <Link to="/" class="text-sky-700 dark:text-gray-200">
                    Home
                </Link>

                <span class="mx-2 text-sky-700 dark:text-gray-300 rtl:-scale-x-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>

                <p class="text-sky-700 dark:text-gray-200 ">Applied Jobs</p>
            </div>
            <p className='text-4xl mt-8'>Applied Jobs</p>

            {/* table */}

            <section class="container px-4 mx-auto">
                <div class="flex items-center justify-end pr-2 font-bold">
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white">Total </h2>

                    <span class="">:{jobadata.length}</span>
                </div>

                <div class="flex flex-col mt-6">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                        <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button class="flex items-center gap-x-2">
                                                    <span>Job Title</span>

                                                </button>
                                            </th>

                                            <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button class="flex items-center gap-x-2">
                                                    <span>Category</span>

                                                </button>
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button class="flex items-center gap-x-2">
                                                    <span>Job Type</span>
                                                </button>
                                            </th>
                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button class="flex items-center gap-x-2">
                                                    <span>Status</span>
                                                </button>
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button class="flex items-center gap-x-2">
                                                    <span>Action</span>
                                                </button>
                                            </th>

                                           

                                           
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {jobadata?.map(job=>  <tr key={job._id}>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <p>{job.job_title}</p>
                                            </td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <p>{job.category_name}</p>
                                            </td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <p>{job.duty_hours}</p>
                                            </td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <p className='text-green-400'>Applied</p>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="flex items-center gap-x-6">


                                                    <div className='tooltip tooltip-right tooltip-error' data-tip="delete">
                                                        <button onClick={()=>{handleDelete(user?.user?.email,job.jobId)}} class="text-red-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-red-300 hover:text-red-600 hover ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </div>


                                                </div>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            {/*  */}
        </div>
    );
};

export default AppliedJobs;