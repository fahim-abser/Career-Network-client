import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider'
import { BsArrowRight } from 'react-icons/bs'

function Recruitments() {
  const {user}=useContext(AuthContext)
  const {data:postingJobData=[]}=useQuery({
    queryKey:[],
    queryFn:(async()=>{
      const res = await fetch(`http://localhost:5000/recuriterjob?email=${user?.email}`)
      const data = res.json()
      return data
    })
  })
  console.log(postingJobData)
  return (
    <div className='container mx-auto font-besicFont'>
        <div className='sm:mx-0 mx-10'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4'>
               {postingJobData?.map((item) =>
                  <div className=' shadow-lg shadow-slate-400 flex flex-col gap-3 capitalize'>
                     <div>
                        <img className='h-40 w-full' src={item?.image} alt="" />
                     </div>
                     <div className='px-3 pb-3 h-full flex flex-col justify-between'>
                           <h2 className='text-lg capitalize'><span className='font-bold'>category name:</span> {item?.category_name}</h2>
                           <div className='flex justify-between items-center my-4'>
                                 <h4><span>duty hours: </span> {item?.duty_hours}</h4>
                                 <h4><span>deadline:</span> {item?.deadline}</h4>
                           </div>
                           <button className='flex items-center justify-between w-full btn btn-primary btn-sm'>
                                 <Link to={""}>click</Link>
                                 <BsArrowRight className='text-2xl'></BsArrowRight>
                           </button>
                     </div>
                  </div>
               )}
            </div>
        </div>
    </div>
  )
}

export default Recruitments