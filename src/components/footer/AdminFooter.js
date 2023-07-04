import React from "react";

const AdminFooter = () => {
  return (
    <div className="">
      <footer className="flex items-center justify-between px-4  w-full">
        <div className="sm:text-sm text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Electrik Auto Showroom All rights
          reserved.
        </div>
        <div className="sm:text-sm text-xs text-gray-500">
          Term and Condition | Privacy & Policy
        </div>
      </footer>
    </div>
  );
};

export default AdminFooter;
