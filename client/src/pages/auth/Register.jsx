import React, { useState } from 'react'
import LoginRegisterLeft from '../../common/LoginRegisterLeft'
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Register = () => {
  const initialState = {
    username: "",
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast(data?.payload?.message);
        setFormData(initialState);
        navigate("/login");
      } else {
        toast(data?.payload?.message);
      }
    });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-0 flex-col sm:flex-row">
      {/* Left Section */}
      <LoginRegisterLeft />

      {/* Right Section */}
      <div className="flex flex-col w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:flex-1 md:max-w-lg md:mx-6 lg:mx-12">
        {/* Welcome Text */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#2a458a] text-center mb-2">Register now</h1>
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="font-semibold text-sm sm:text-lg text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a458a] focus:border-transparent"
            />
            <label
              htmlFor="email"
              className="font-semibold text-sm sm:text-lg text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a458a] focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="font-semibold text-sm sm:text-lg text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a458a] focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2a458a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e356c] transition duration-300"
          >
            Register
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-2">
            <a href="#" className="text-sm text-[#2a458a] hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <div className="border-t border-gray-300 flex-1"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="border-t border-gray-300 flex-1"></div>
        </div>

        {/* Social Sign In */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span className="mr-2">Google</span>
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span className="mr-2">Facebook</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-[#2a458a] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
