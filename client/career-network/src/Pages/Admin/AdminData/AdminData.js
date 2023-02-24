import React from 'react'
import { BsCalendar2Day, BsCalendarEvent, BsCreditCardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineAccountTree, MdOutlineReportProblem } from 'react-icons/md'
import ProjectSummary from '../AllAdminTable/ProjectSummary'
import SalaryStatic from '../Chart/SalaryStatic'
import EmployeCountry from '../Chart/EmployeCountry'
import EmployeSatisfi from '../Chart/EmployeSatisfi'
import Holiday from '../Holiday/Holiday'

function AdminData() {

  return (
    <div className="min-h-screen w-full px-6 pt-4 capitalize bg-home">
        <div>
            <div className='capitalize'> 
               <h2 className="text-2xl font-semibold leading-9">welcome to admin dashboard</h2>
               <p> is a long established fact that a reader will be distracted by </p>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 w-full gap-4 mt-6'>
               <div className=' shadow-md shadow-slate-400 flex items-center flex-col justify-center h-28 bg-white'>
                  <FiUsers className='text-3xl'></FiUsers>
                  <p className='text-xl capitalize'>user</p>
               </div>
               <div className='rounded-md shadow-md shadow-slate-400 flex items-center flex-col justify-center h-28 bg-white'>
                  <BsCalendar2Day className='text-3xl'></BsCalendar2Day>
                  <p className='text-xl capitalize'>holiday</p>
               </div>
               <div className='rounded-md shadow-md shadow-slate-400 flex items-center flex-col justify-center h-28 bg-white'>
                  <BsCalendarEvent className='text-3xl'></BsCalendarEvent>
                  <p className='text-xl capitalize'>event</p>
               </div>
               <div className='rounded-md shadow-md shadow-slate-400 flex items-center flex-col justify-center h-28 bg-white'>
                  <BsCreditCardFill className='text-3xl'></BsCreditCardFill>
                  <p className='text-xl capitalize'>payroll</p>
               </div>
               <div className='rounded-md shadow-md shadow-slate-400 flex items-center flex-col justify-center h-28 bg-white'>
                  <MdOutlineAccountTree className='text-3xl'></MdOutlineAccountTree>
                  <p className='text-xl capitalize'>account</p>
               </div>
               <div className=' rounded-md shadow-md shadow-slate-400 flex items-center flex-col justify-center h-28 bg-white'>
                  <MdOutlineReportProblem className='text-3xl'></MdOutlineReportProblem>
                  <p className='text-xl capitalize'>report</p>
               </div>
            </div>
            <div className='grid md:grid-cols-9 grid-cols-1 gap-4 my-10'>
               <div className='md:col-span-6 p-5 shadow-md shadow-slate-400 rounded-md capitalize bg-white'>
                  <div>
                     <h2 className='text-2xl'>salary statistics</h2>
                  </div>
                  <div className="">
                     <SalaryStatic></SalaryStatic>
                  </div>
               </div>
               <div className='md:col-span-3 flex flex-col justify-around p-5 shadow-md shadow-slate-400 rounded-md capitalize w-full md:h-full h-96 bg-white'>
                  <h4 className='text-2xl '>total amount</h4>
                  <div className=''>
                     <h4 className='text-xl'>balance</h4>
                     <h2 className='text-3xl leading-6'>$3000</h2>
                  </div>
                  <div className='leading-3'>
                     <h4>bank of asia</h4>
                     <progress className="progress progress-success w-full rounded-none" value="70" max="100"></progress>
                  </div>
                  <div className='leading-3'>
                     <h4 className='uppercase'>ndb</h4>
                     <progress className="progress progress-info w-full" value="50" max="100"></progress>
                  </div>
                  <div className='leading-3'>
                     <h4>green bank</h4>
                     <progress className="progress progress-warning w-full" value="30" max="100"></progress>
                  </div>
                  <hr/>
                  <button className='btn bg-amber-700 border-none rounded-none'>view more</button>
               </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-4'>
               <div className='shadow-md rounded-md shadow-slate-400 p-4 w-full col-span-1 bg-white'>
                  <div className='mb-10'>
                     <h4 className='text-2xl'>performence</h4>
                     <p>Measure How Fast You’re Growing Monthly Recurring Revenue. </p>
                  </div>
                  <div className='h-64 flex flex-col justify-around'>
                     <div className='flex flex-col justify-center'>
                        <div className='flex justify-between items-end'>
                           <h5 className='text-xl'>70%</h5>
                           <p>developer team</p>
                        </div>
                        <progress className="progress w-full" value="70" max="100"></progress>
                     </div>
                     <div className='flex flex-col justify-center'>
                        <div className='flex justify-between items-end'>
                           <h5 className='text-xl'>60%</h5>
                           <p>design team</p>
                        </div>
                        <progress className="progress w-full" value="60" max="100"></progress>
                     </div>
                     <div className='flex flex-col justify-center'>
                        <div className='flex justify-between items-end'>
                           <h5 className='text-xl'>40%</h5>
                           <p>management</p>
                        </div>
                        <progress className="progress w-full" value="40" max="100"></progress>
                     </div>
                     <div className='flex flex-col justify-center'>
                        <div className='flex justify-between items-end'>
                           <h5 className='text-xl'>60%</h5>
                           <p>marketing</p>
                        </div>
                        <progress className="progress w-full" value="60" max="100"></progress>
                     </div>
                     <div className='flex flex-col justify-center md:mb-0 mb-12'>
                        <div className='flex justify-between items-end'>
                           <h5 className='text-xl'>50%</h5>
                           <p>others</p>
                        </div>
                        <progress className="progress w-full" value="50" max="100"></progress>
                     </div>
                  </div>
               </div>
               <div className='shadow-md shadow-slate-400 rounded-md p-4 w-full col-span-1 bg-white'>
                  <h2 className='text-2xl mb-10'>quentity Employe Country</h2>
                  <EmployeCountry></EmployeCountry>
               </div>
               <div className='shadow-md shadow-slate-400 rounded-md p-4 w-full col-span-1 bg-white'>
                  <h3 className='mb-10 capitalize text-2xl'>Employe satisfaction</h3>
                  <EmployeSatisfi></EmployeSatisfi>
               </div>
            </div>
            <div className='mt-10'>
               <h3 className='mb-5 text-2xl'>project summary</h3>
               <ProjectSummary></ProjectSummary>
            </div>
            <div>
               <Holiday></Holiday>
            </div>
        </div>
    </div>
  )
}

export default AdminData