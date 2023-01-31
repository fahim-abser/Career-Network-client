import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { useQuery } from 'react-query'
import { AuthContext } from '../../../Context/AuthProvider'
import AlluserModal from '../AlluserModal/AlluserModal'

function JobSeekerTabel() {
  const {setAddValueInModal,addValueInModal} = useContext(AuthContext)
  const {data:allJobSeeker=[], refetch}=useQuery({
    queryKey:[],
    queryFn:(async()=>{
      const res = await fetch("http://localhost:5000/jobSeeker")
      const data = res.json()
      return data
    })
  })
  
  const createAdmin = (id) =>{
    const createAdmin={
        id:id,
        role:"admin"
    }
    fetch('http://localhost:5000/addAdmin',{
        method:"PUT",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(createAdmin)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            refetch()
            toast.success('add admin successfully')
        }
    })
    .catch((e)=>{
        console.error(e.message);
    })
}
  return (
    <div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr className='text-center'>
                        <th>image</th>
                        <th>email</th>
                        <th>role</th>
                        <th>create admin</th>
                        <th>delete user</th>
                    </tr>
                </thead>
                <tbody>
                    {allJobSeeker.map((item ) => 
                        <tr key={item._id} className='text-center'>
                            <td className='flex justify-center'>
                                <div className='h-10 w-10 '>
                                    <div className={`${item?.verify? "avatar online":"avatar offline"}`}>
                                        <div className="w-10 h-10 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" alt='recruiter_image' />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className=''>
                                <h3>{item.email}</h3>
                            </td>
                            <td className=''>
                                <h3>{item.role}</h3>
                            </td>
                            <td className=''>
                                <button onClick={()=>createAdmin(item._id)} className='btn btn-sm btn-warning'>make admin</button>
                            </td>
                            <td className=''>
                                <label onClick={()=>setAddValueInModal(item._id)} htmlFor="my-modal" className="btn btn-error btn-sm">delete </label>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        {addValueInModal && <AlluserModal addValueInModal={addValueInModal} refetch={refetch} setAddValueInModal={setAddValueInModal}></AlluserModal>}
    </div>
  )
}

export default JobSeekerTabel