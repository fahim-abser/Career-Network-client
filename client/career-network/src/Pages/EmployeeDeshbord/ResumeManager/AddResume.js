import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

function AddResume() {
    const [isLoding,setLoding]=useState(false)
    const [success,setSuccess]=useState([])
    const [error,setError]=useState(null)
    // const formdata = new FormData()
    const fileTypes = ["JPG", "PNG", "GIF","PDF"];
    const [file, setFile] = useState(null);
    const handleData = (file) => {
        setFile(file);
    };
    // formdata.append(file?.name)
   useEffect(()=>{
        setLoding(true)
        const inUserDataSet =async()=>{
            try {
                const res = await fetch('https://api.imgbb.com/1/upload?key=d1f3d96d8051fdcb90609fd80a5c336d',{
                    method:"POST",
                    body:file
                })
                    const data = await res.json()
                    setSuccess(data)
                }
            catch(error){
                setError(error.message)
            }
            setLoding(false)
        }
        inUserDataSet()
   },[file])
  return (
    <div>
        <div className='min-h-screen overflow-hidden -z-50 bg-sky-800 text-white'>
            <div>
                <div className='text-center mt-16'>
                    <h2 className='text-6xl capitalize font-semibold'>add you resume or cv</h2>
                </div>
                <FileUploader className="-z-50" handleChange={handleData} name="file" types={fileTypes} >
                    <div className={`h-72 -z-50 grid place-items-center outline-dashed my-10 lg:mx-10 mx-6 bg-slate-300`}> 
                        <h2 className='text-5xl capitalize font-bold '>drag & drop</h2>
                    </div>
                    <div className='lg:mx-10 mx-6 mb-10'>
                        <button className='btn btn-secondary w-40'>add resume</button>
                    </div>
                </FileUploader>
            </div>
            {/* <img className='h-20 w-10' src={file.name} alt="" /> */}
        </div>
    </div>
  )
}

export default AddResume