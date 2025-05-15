import React from 'react';
import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center max-w-xl w-full border-t-8 border-green-500">
        <div className="flex items-center mb-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="#" className="mr-2">
            <rect x="2" y="7" width="20" height="10" rx="3" fill="#10C850"/>
            <rect x="6" y="11" width="12" height="6" rx="2" fill="#34D399"/>
          </svg>
          <span className="text-3xl font-extrabold text-green-600 tracking-tight">LoanEase</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">Your Trusted Partner for Easy Loans</h1>
        <p className="mb-6 text-gray-500 text-center max-w-md">Fast approval, low interest rates, and flexible repayment options. Empowering your financial journey with transparency and care.</p>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mb-4">
          <Link href="/signin" className="w-full sm:w-auto border-2 border-green-500 text-green-500 rounded-full px-10 py-3 font-semibold text-lg text-center hover:bg-green-500 hover:text-white transition-colors">Sign In</Link>
          <Link href="/signup" className="w-full sm:w-auto border-2 border-blue-500 text-blue-500 rounded-full px-10 py-3 font-semibold text-lg text-center hover:bg-blue-500 hover:text-white transition-colors">Sign Up</Link>
        </div>
        <div className="mt-6 text-sm text-gray-400 text-center">
          <span>Safe. Secure. Simple.</span>
        </div>
      </div>
    </div>
  );
}
