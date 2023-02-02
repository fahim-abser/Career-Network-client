import React from 'react'
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query'

function AdminTable() {
   
  const {data:allAdminData=[], refetch}=useQuery({
     queryKey:[],
     queryFn:(async()=>{
        const res = await fetch("http://localhost:5000/alladmin");
        const data = res.json()
        return data
     })
    })
    const DeleteAdminData= ()=>{

    }
    const removeVarifyData = async(removeId)=>{   
        try{
            const removeData = {
                id:removeId,
                verify:false
            }
            const res = await fetch("http://localhost:5000/removeverify",{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(removeData)
            })
            const data = await res.json()
            if(data?.acknowledged){
                toast.success("verify remove")
                refetch()
            }
        }
        catch(error){
            console.log(error)
        }
        finally{}
    }

    const addVarifyData= async(addingId)=>{
        try{
            const addingData = {
                id:addingId,
                verify:true
            }
            const res = await fetch("http://localhost:5000/addingverify",{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(addingData)
            })
            const data = await res.json()
            if(data?.acknowledged){
                toast.success("varifiyed")
                refetch()
            }
        }
        catch(error){
            console.log(error)
        }
        finally{}
    }
  return (
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
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
                {allAdminData.map((item ) => 
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
                            <button className='btn btn-error btn-sm'>delete admin</button>
                        </td>                     
                        <td className=''>
                            {item?.verify? <button onClick={()=>removeVarifyData(item?._id)} className='btn btn-warning btn-sm'>remove varify</button> : <button onClick={()=>addVarifyData(item?._id)} className='btn btn-success btn-sm'>add varify</button>}
                        </td>                     
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default AdminTable