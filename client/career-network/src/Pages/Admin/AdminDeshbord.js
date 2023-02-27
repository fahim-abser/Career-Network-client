import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminDrawer from './AdminDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { onlyDrawerClick } from '../../app/DashboardSlice/DashboardSlice'
import Footer2 from '../Shared/Footer/Footer2'

function AdminDeshbord() {
  const {state} = useSelector(store=>store.counter)
  const dispatch = useDispatch()
  return (
    <div className='flex h-screen relative'>
    <div className={`lg:w-80 md:w-80 w-72 h-screen left-0 lg:static fixed lg:duration-75 duration-300 transition-transform z-40 lg:translate-x-0 ${state?"translate-x-0  ease-in ": " ease-out -translate-x-full "} bg-slate-800`}>
        <AdminDrawer></AdminDrawer>
    </div>
    <div className='w-full overflow-y-scroll'>
        <AdminNavbar></AdminNavbar>
          <div onClick={()=>dispatch(onlyDrawerClick())} className=''>
              <Outlet></Outlet>
          </div>
        <Footer2></Footer2>
    </div>
</div>
  )
}

export default AdminDeshbord