import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resumeFetch } from '../../../app/EmployeSlice/ResumeSlice'
import { AuthContext } from '../../../Context/AuthProvider'

function ResumeManager() {
  const {user}= useContext(AuthContext)
  const dispatch = useDispatch()
  const data = useSelector(state=>state)
  console.log(data)
  useEffect(()=>{
    dispatch(resumeFetch(user?.email))
  },[user?.email])
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