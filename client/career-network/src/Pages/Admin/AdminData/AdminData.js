import React from 'react'
import { Link } from 'react-router-dom'

function AdminData() {
  return (
    <div className="">
      <div>
        <h2>check career network user</h2>
      </div>
      <div>
        <Link to={'/admin/recruiter'}><button className='btn btn-primary'>recruite</button></Link>
        <Link to={"/admin/jobseerker"}><button className='btn btn-secondary'>job seeker</button></Link>
        <Link to={"/admin/admintable"}><button className='btn-info btn'>admin</button></Link>
      </div>
    </div>
  )
}

export default AdminData