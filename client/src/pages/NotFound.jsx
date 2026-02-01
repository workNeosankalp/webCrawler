import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-linear-to-r from-[#FF6B6B] to-[#D64639] bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Error Icon */}
        <div className="mb-8">
          <svg className="w-32 h-32 text-[#FF6B6B]/30 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="px-8 py-3 bg-linear-to-r from-[#FF6B6B] to-[#D64639] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[#FF6B6B]/50 transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link 
            to="/prompts"
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-300 hover:border-[#FF6B6B]/60 transition-all duration-300"
          >
            View Prompts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
