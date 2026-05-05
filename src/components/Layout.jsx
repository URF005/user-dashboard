import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Main Container: ensures content doesn't hit the edges on large screens */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-20">
        {children}
      </div>
      
      {/* Professional Footer */}
      <footer className="py-10 text-center border-t border-slate-200 mt-20">
        <p className="text-slate-400 text-sm font-medium">
          &copy; 2026 StaffFlow Directory • Built for Frontend Excellence
        </p>
      </footer>
    </div>
  );
};

export default Layout;