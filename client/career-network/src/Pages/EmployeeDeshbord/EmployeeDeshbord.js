import React from 'react'
import EmployeeDeshbordNavbar from './EmployeeDeshbordNavbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'

function EmployeeDeshbord() {
  return (
      <div>
          <EmployeeDeshbordNavbar></EmployeeDeshbordNavbar>
          <Outlet></Outlet>
          <Navbar></Navbar>
    </div>
  )
}

export default EmployeeDeshbord