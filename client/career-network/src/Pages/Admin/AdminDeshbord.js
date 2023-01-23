import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

function AdminDeshbord() {
  return (
      <div>
          <AdminNavbar></AdminNavbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}

export default AdminDeshbord