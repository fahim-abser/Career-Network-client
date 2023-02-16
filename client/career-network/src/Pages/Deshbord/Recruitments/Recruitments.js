import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider'

function Recruitments() {
  const { user } = useContext(AuthContext)
  const { data: postingJobData = [], refetch } = useQuery({
    queryKey: [],
    queryFn: (async () => {
      const res = await fetch(`http://localhost:5000/recuriterjob?email=${user?.email}`)
      const data = res.json()
      return data
    })
  })


  const handleDeleteJob = job => {
    fetch(`http://localhost:5000/deletejob/${job._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${job.job_title} deleted successfully`)
        }
      })
  }

  console.log(postingJobData)
  return (
    <div className='m-5'>
      <h2 className="text-3xl p-3 font-bold text-sky-900 text-center">My Posted Jobs</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Details</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              postingJobData.map((job, i) => <tr key={job._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={job.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{job.job_title}</td>
                <td>{job && <Link to={`/employedashboard/applieddetails/${job._id}`}><button className='btn btn-xs btn-info'>Details</button></Link>}</td>
                <td>{job?.isPaid !== true && <Link to={`/employedashboard/payment/${job._id}`}><button className='btn btn-xs btn-info'>Pay For Feature</button></Link>}{job?.isPaid === true && <button className='btn btn-xs  btn-success'>Paid For Featured</button>}</td>
                <td>{job && <button onClick={() => handleDeleteJob(job)} className='btn btn-xs btn-error'>Delete This Job</button>}</td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Recruitments