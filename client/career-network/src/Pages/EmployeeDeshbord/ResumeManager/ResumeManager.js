import React from 'react'
import { Link } from 'react-router-dom'

function ResumeManager() {
  return (
    <div>
        <div className='h-[100vh] border-2 border-red-800 bg-sky-600'>
            <div>hello world</div>
            <Link to={"/employedashboard/addresume"}><button  className='btn btn-info'>add resume</button></Link>
        </div>
    </div>
  )
}

export default ResumeManager