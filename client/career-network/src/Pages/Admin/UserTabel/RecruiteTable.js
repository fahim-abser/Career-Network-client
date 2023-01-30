import React from 'react'
import { useQuery } from 'react-query'

function RecruiteTable() {
    const { data:recruiterdata=[] } = useQuery({
        querykey: [],
        queryFn: (async () => {
            const res = await fetch('http://localhost:5000/recruiter');
            const data = res.json();
            return data
        })
    })
    console.log(recruiterdata)
  return (
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
                {recruiterdata.map((item ) => 
                    <tr className='text-center'>
                        <td className='flex justify-center'>
                            <div className='h-10 w-10 '>
                                <div className="avatar online">
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
                            <p className='btn btn-sm btn-warning'>add admin</p>
                        </td>
                        <td className=''>
                            <p className="btn btn-error btn-sm">delete</p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default RecruiteTable