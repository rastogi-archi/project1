import React, { useState } from 'react';
import { Cable, CircleHelp, LogOut, Menu, MessageCircleMore, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from '../redux/authSlice';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for toggling the menu
  const [openMenu, setOpenMenu] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Function to handle logout
  const handleLogout = () => {
    dispatch(logoutUser()).then((data) => {
      if (data?.payload?.success) {
        toast(data?.payload?.message);
        navigate("/login");
      } else {
        toast(data?.payload?.message);
      }
    });
  };

  return (
    <nav className="flex justify-between items-center bg-gray-100 shadow-md h-16 relative">

      {/* Logo or Brand Name */}
      <div className="flex items-center">
        {/* Menu button for small screens */}
        <button onClick={toggleMenu} className="sm:hidden p-2 rounded-full hover:bg-gray-200">
          <Menu className="text-[#2a458a] size-6" />
        </button>
        <div className="flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-36 sm:w-28 ml-[-45px] sm:ml-0"
          />
          <span className="text-xl font-bold text-[#2a458a] hidden sm:block ml-[-35px]">Talent Bridge</span>
        </div>
      </div>

      {/* Sidebar (conditionally rendered for mobile view) */}
      {openMenu && (
        <div className="sm:hidden fixed top-0 left-0 bg-gray-100 w-20 h-full shadow-lg z-50 p-4 mt-[70px]">
          <div className="flex flex-col">
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition">
              <User className="text-[#2a458a]" />
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition">
              <MessageCircleMore className="text-[#2a458a]" />
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition">
              <Cable className="text-[#2a458a]" />
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition">
              <CircleHelp className="text-[#2a458a]" />
            </button>
          </div>
        </div>
      )}

      {/* Logout Button */}
      <button
        className="flex items-center bg-[#2a458a] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1e356c] transition duration-300 mr-4"
        onClick={handleLogout}
      >
        <LogOut className="sm:mr-2" />
        <p className="hidden sm:block">Logout</p>
      </button>
    </nav>
  );
};

export default Navbar;
