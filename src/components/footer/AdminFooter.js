import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="flex items-center justify-between px-4 py-3  mt-5">
      <div className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
      </div>
      <div className="text-sm text-gray-500">
        Powered by <a href="#" className="text-gray-500 hover:text-gray-600">Your Company</a>
      </div>
    </footer>
  );
};

export default AdminFooter;
