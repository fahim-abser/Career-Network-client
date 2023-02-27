import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdOutlineDescription } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BsCalendarDate, BsCheckLg } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useEffect } from 'react';
import GetLoading from '../../components/Loading/GetLoading';
import useCheckApply from '../../hooks/useCheckApply';
import useCheckSaved from '../../hooks/useCheckSaved';
import useGetNotifications from '../../hooks/useGetNotifications';


const JobDetails = () => {
  const data = useLoaderData()
  const user = useContext(AuthContext)
  const { _id, job_title, duty_hours, location, salary, companyName, experience, deadline, description, jobSummary,recruiterEmail,category_name } = data
  const descrip = description.split('.')

  const [loading, setLoading] = useState(false)

  const applied = useCheckApply(user?.user?.email, _id, loading)
  const saved = useCheckSaved(user?.user?.email, _id,loading)

  //  console.log(new Date());
  // console.log(notInfo)
  const postNotification = ()=>{
    const notification ={
        applicant_name:'John',
        applicant_email:user?.user?.email,
        job_id:_id,
        job_title,
        createdAt:new Date(),
        companyEmail:recruiterEmail,
        status:'unread'
    }
    fetch('http://localhost:5000/notifications', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notification),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
       
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleApply = () => {
    setLoading(true)
    const job = {
      applicant_email: user?.user?.email,
      jobId: _id,
      job_title,
      duty_hours,
      category_name,
      company: companyName,
      status: "Appiled",
    }

    fetch('http://localhost:5000/appliedjob', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setLoading(false);
        postNotification()
        toast.success('Apply Success')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const handleSaveJob = () => {
    setLoading(true)
    const job = {
      applicant_email: user?.user?.email,
      jobId: _id,
      job_title,
      duty_hours,
      category_name,
      company: companyName,
      status: "Appiled",

    }

    fetch('http://localhost:5000/savedJob', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setLoading(false);
        toast.success('saved ')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const handleUnSaveJob = (email,id) => {
    setLoading(true)
    const url = `http://localhost:5000/savedjob?email=${email}&_id=${id}`
    console.log(url)
    fetch(url, {
        method: 'DELETE',
       
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
               
              setLoading(false);
                toast.success('Unsaved')
                
            }
        })
}

  return (
    <div className='m-10'>
      <section className=' lg:grid grid-cols-4 gap-6'>
        {/* description */}
        <div className='col-span-3'>
          <h1 className='text-2xl font-bold mb-2 text-green-700'>{job_title}</h1>
          <h1 className='text-lg font-bold mb-4'>Company Name </h1>

          <div className='flex items-center' >
            <MdOutlineDescription />
            <h2 className='ml-1 text-lg font-bold'> Job Summary</h2>
          </div>
          <div className="divider"></div>
          <p className='mb-6'>{jobSummary}</p>
          <div className='flex items-center' >
            <MdOutlineDescription />
            <h2 className='ml-1 text-lg font-bold'> Job Responsibility</h2>
          </div>
          <div className="divider"></div>
          <ul className='pl-6'>{

            descrip.map(text => <li className='list-disc '>{text}.</li>)
          }

          </ul>
          <p className='font-bold text-lg mt-4'>Job Location</p>
          <div className='flex items-center pl-2'>
            <GoLocation />
            <p>{location}</p>
          </div>
          <h1 className='text-lg font-bold ml-1 mt-6'>Employment Status</h1>
          <div className='flex items-center pl-3 '>
            <FiClock />
            <p className='pl-1'>{duty_hours}</p>
          </div>


          <h1 className='text-lg font-bold ml-1 mt-6'>Experience Requirements</h1>
          <div className='flex items-center pl-3 '>
            <FiClock />
            <p className='pl-1'>At most {experience} {experience > 1 ? ' years' : ' year'} </p>
          </div>
          <h1 className='text-lg font-bold mt-6'>Salary</h1>
          <p className='pl-3'>{salary}</p>
          <h1 className='text-lg font-bold ml-1 mt-6'>Last Date of Apply</h1>
          <div className='flex items-center pl-3 '>
            <BsCalendarDate />
            <p className='pl-1'>{deadline} </p>
          </div>
        </div>
        <div className='mt-10 h-64 lg:bg-[#F5F5F5]'>
          <div className='bg-black text-white h-10 p-3 rounded-md rounded-b-none font-semibold hidden lg:block'>
            <p >Job Summary</p>
          </div>
          <div className='text-sm mt-2 dark:text-green-800 p-3 hidden lg:block'>

            <p className='mb-2'><span className='font-bold '>Published on :</span> 18 Jan 2023</p>    {/*  dynamic*/}
            <p className='mb-2'><span className='font-bold '>Vacancy :</span> 2</p>
            <p className='mb-2'><span className='font-bold '>Employment Status :</span> {duty_hours}</p>
            <p className='mb-2'><span className='font-bold '>Experience :</span> {experience}</p>
            <p className='mb-2'><span className='font-bold '>Job Location :</span> {location}</p>
            <p className='mb-2'><span className='font-bold '>Application Deadline :</span> {deadline}</p>

          </div>
          {
            user?.user?.uid ? <div>

              {applied ? <>{loading === true ? <GetLoading></GetLoading> : <button className='bg-green-200 disabled rounded-md h-10 w-full mt-8 text-center text-green-800 font-bold'>{loading ? <button className="btn btn-square loading"></button> : 'Application sent successfully'}</button>}</> : <>
                {loading === true ? <GetLoading></GetLoading> : <button onClick={handleApply} className='bg-green-600 rounded-md h-10 w-full mt-8 text-center text-white font-bold'>Apply</button>}
              </>}
              {
                !saved ? <button onClick={()=>{handleSaveJob()}} className='bg-black dark:bg-stone-600 rounded-md h-10 w-full mt-2 text-center text-white font-bold'>Save</button> : <button onClick={()=>{handleUnSaveJob(user?.user?.email,_id)}} className='bg-gray-600 rounded-md h-10 w-full mt-2 text-center text-white font-bold'>Unsave</button>
              }
            </div> : <p className='text-center mt-10 font-bold text-lg text-blue-600'>Please Login to Apply</p>
          }


        </div>

      </section>
    </div>
  );
};

export default JobDetails;