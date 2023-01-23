import React from 'react'
import EmployeeDeshbordNavbar from './EmployeeDeshbordNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

function EmployeeDeshbord() {
  return (
      <div>
          <EmployeeDeshbordNavbar></EmployeeDeshbordNavbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}

export default EmployeeDeshbord