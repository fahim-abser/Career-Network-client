import React from 'react'
import Deshbordnavbar from './Deshbordnavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

function Deshbord() {
  return (
      <div className='bg-white dark:bg-black dark:text-white'>
          <Deshbordnavbar></Deshbordnavbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}

export default Deshbord