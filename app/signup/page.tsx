import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-4xl p-8">
        {/* Left: Sign Up Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-500 mb-2">Sign Up for Account</h2>
          <div className="border-b-2 w-10 border-green-500 inline-block mb-4"></div>
          <div className="flex justify-center gap-4 mb-4">
            <button className="border-2 border-gray-200 rounded-full p-3 flex items-center justify-center text-sm hover:bg-gray-100"><FaFacebook /></button>
            <button className="border-2 border-gray-200 rounded-full p-3 flex items-center justify-center text-sm hover:bg-gray-100"><FaLinkedin /></button>
            <button className="border-2 border-gray-200 rounded-full p-3 flex items-center justify-center text-sm hover:bg-gray-100"><FaGoogle /></button>
          </div>
          <p className="text-gray-400 mb-4">or use your email for registration</p>
          <form className="flex flex-col gap-4">
            <div className="bg-gray-100 w-full p-2 flex items-center mb-2 rounded">
              <FaUser className="text-gray-400 m-2" />
              <input type="text" name="name" placeholder="Full Name" className="bg-gray-100 outline-none text-sm flex-1" />
            </div>
            <div className="bg-gray-100 w-full p-2 flex items-center mb-2 rounded">
              <FaRegEnvelope className="text-gray-400 m-2" />
              <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
            </div>
            <div className="bg-gray-100 w-full p-2 flex items-center mb-2 rounded">
              <MdLockOutline className="text-gray-400 m-2" />
              <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
            </div>
            <div className="bg-gray-100 w-full p-2 flex items-center mb-2 rounded">
              <MdLockOutline className="text-gray-400 m-2" />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1" />
            </div>
            <button type="submit" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 font-semibold hover:bg-green-500 hover:text-white transition-colors">Sign Up</button>
          </form>
          <p className="mt-4 text-sm text-gray-500">Already have an account?{' '}
            <Link href="/" className="text-green-500 font-semibold hover:underline">Sign In</Link>
          </p>
        </div>
        {/* Right: Welcome Section */}
        <div className="w-1/2 bg-green-500 text-white rounded-3xl flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <div className="border-b-2 w-10 border-white inline-block mb-4"></div>
          <p className="mb-8 text-center">To keep connected with us please login with your personal info</p>
          <Link href="/" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 transition-colors">Sign In</Link>
        </div>
      </div>
    </div>
  );
} 