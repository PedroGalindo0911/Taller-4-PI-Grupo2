import React from 'react';

const DropdownMenu = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
      <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        View Profile
      </a>
      <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Log Out
      </a>
    </div>
  );
};

export default DropdownMenu;
