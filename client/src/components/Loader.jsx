import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B6B]/5 to-transparent animate-pulse"></div>

      {/* Main orbital system */}
      <div className="relative">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full border-2 border-[#FF6B6B]/40"></div>
          
          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-[#FF6B6B] rounded-full shadow-lg shadow-[#FF6B6B]/50"></div>
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 -ml-2 w-4 h-4 bg-[#D64639] rounded-full shadow-lg shadow-[#D64639]/50"></div>
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2.5s' }}>
            <div className="absolute top-1/2 right-0 -mt-2 w-4 h-4 bg-[#FF6B6B] rounded-full shadow-lg shadow-[#FF6B6B]/50"></div>
          </div>

          {/* Middle orbit ring */}
          <div className="absolute inset-8 rounded-full border-2 border-[#D64639]/40"></div>
          <div className="absolute inset-8 animate-spin" style={{ animationDuration: '2s' }}>
            <div className="absolute top-1/2 left-0 -mt-1.5 w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-[#D64639] rounded-full"></div>
          </div>

          {/* Inner orbit ring */}
          <div className="absolute inset-16 rounded-full border-2 border-[#FF6B6B]/40"></div>
          <div className="absolute inset-16 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-1/2 left-1/2 -ml-1 w-2 h-2 bg-gradient-to-r from-[#D64639] to-[#FF6B6B] rounded-full"></div>
          </div>

          {/* Central core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] via-[#D64639] to-[#FF6B6B] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#D64639] rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Status text */}
        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#D64639] to-[#FF6B6B] animate-pulse">
              AI PROMPTS
            </h3>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent"></div>
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-3">
            <div className="flex space-x-1">
              <span className="block w-2 h-8 bg-[#FF6B6B] animate-pulse"></span>
              <span className="block w-2 h-8 bg-[#FF6B6B] animate-pulse animation-delay-150"></span>
              <span className="block w-2 h-8 bg-[#D64639] animate-pulse animation-delay-300"></span>
              <span className="block w-2 h-8 bg-[#D64639] animate-pulse animation-delay-450"></span>
              <span className="block w-2 h-8 bg-[#FF6B6B] animate-pulse animation-delay-600"></span>
            </div>
          </div>

          <p className="mt-4 text-gray-700 text-sm font-mono">
            <span className="text-[#FF6B6B]">●</span> Loading prompts
            <span className="animate-ping ml-2">...</span>
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#FF6B6B]/50"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#D64639]/50"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#D64639]/50"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#FF6B6B]/50"></div>
    </div>
  );
};

export default Loader;
