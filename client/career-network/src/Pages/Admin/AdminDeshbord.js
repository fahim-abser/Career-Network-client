import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import { AuthContext } from '../../Context/AuthProvider'
import AdminNavbar from './AdminNavbar'

function AdminDeshbord() {
  const {setAdminNavMenu}=useContext(AuthContext)
  return (
      <div>
          <AdminNavbar></AdminNavbar>
          <div onClick={()=>setAdminNavMenu(true)}>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
    </div>
  )
}

export default AdminDeshbord