import { Viewer, Worker } from '@react-pdf-viewer/core'
import React from 'react'
import { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider'


function ResumeManager() {

  const {user}= useContext(AuthContext)
  const {data:resumeData={}}=useQuery({
    queryKey:{},
    queryFn:(async()=>{
      const res = await fetch(`http://localhost:5000/resumefind?email=${user?.email}`)
      const data = await res.json()
      return data
    })
  })
  console.log(resumeData)
  return (
    <div>
        <div className='w-40'>
            <div className='mx-auto'>
              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                <Viewer fileUrl={resumeData?.resume}/>
            </Worker> */}
            </div>
            <Link to={"/employedashboard/addresume"}><button  className='btn btn-info'>add resume</button></Link>
        </div>
    </div>
  )
}

export default ResumeManager