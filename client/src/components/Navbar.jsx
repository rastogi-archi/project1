import React from 'react'
import Menu from "lucide-react"

const Navbar = () => {
  return (
    <nav>
      <Menu />
      <button><LogOut />Logout</button>
    </nav>
  )
}

export default Navbar
