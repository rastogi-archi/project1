import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen overflow-y-hidden'>
      <Navbar/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Home
