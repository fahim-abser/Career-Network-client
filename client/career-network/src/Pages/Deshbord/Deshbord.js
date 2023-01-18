import React from 'react'
import Deshbordnavbar from './Deshbordnavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

function Deshbord() {
  return (
      <div>
          <Deshbordnavbar></Deshbordnavbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}

export default Deshbord