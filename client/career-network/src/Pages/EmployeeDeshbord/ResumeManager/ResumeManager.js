import { Viewer, Worker } from '@react-pdf-viewer/core'
import React from 'react'
import { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider'

import '@react-pdf-viewer/core/lib/styles/index.css';




function ResumeManager() {
  const {user,isloding}= useContext(AuthContext)
  const {data:resumeData={},isLoading,}=useQuery({
    queryKey:[user],
    queryFn:(async()=>{
      const res = await fetch(`http://localhost:5000/resumefind?email=${user?.email}`)
      const data = res.json()
      return data
    })
  })
  isLoading && <p>loding....</p>
  isloding && <p>loding ----</p>
  return (
    <div>
        <div className='w-full mx-auto text-center'>
        <div class="flex items-center py-2 overflow-x-auto whitespace-nowrap">
        <Link to="/" class="text-sky-700 dark:text-gray-200">
          Home
        </Link>

        <span class="mx-2 text-sky-700 dark:text-gray-300 rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <p class="text-sky-700 dark:text-gray-200 ">Resume</p>
      </div>
            <div className='my-4 flex justify-evenly w-8/12 mx-auto'>
                <Link to={"/employedashboard/addresume"}><button  className='btn btn-info btn-sm'>{resumeData?.resume ? <span>update resume</span> : <span>add resume</span> }</button></Link>
                <button  className='btn btn-primary btn-sm'><a download={"resume.pdf"} href={resumeData?.resume}>download</a></button>
            </div>
            <div className=''>
              {resumeData?.resume ? <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                <div className='w-full mx-auto'><Viewer fileUrl={resumeData?.resume}/></div>
            </Worker>:<h2 className='grid place-content-center h-[60vh] text-4xl font-bold w-11/12 mx-auto text-center'>please add your resume or cv</h2>}
            </div>
        </div>
    </div>
  )
}

export default ResumeManager