import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ProfileModal from './ProfileModal';
import CoursesModal from './CoursesModal';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
    setIsDropdownOpen(false);
  };

  const openCoursesModal = () => {
    setIsCoursesModalOpen(true);
    setIsDropdownOpen(false);
  };

  const closeProfileModal = () => setIsProfileModalOpen(false);
  const closeCoursesModal = () => setIsCoursesModalOpen(false);

  return (
    <nav className="bg-white shadow-lg py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o Nombre del blog */}
        <div className="text-2xl font-semibold text-gray-800">
          StudentBlog
        </div>

        {/* Botón de usuario con dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none flex items-center space-x-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
          >
            <FontAwesomeIcon icon={faUser} className="text-gray-700 text-2xl" />
          </button>
          {/* DropdownMenu se abre desde el botón */}
          <DropdownMenu
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
            onProfileClick={openProfileModal}
            onCoursesClick={openCoursesModal}
          />
        </div>
      </div>

      {/* Profile y Courses Modals */}
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
      <CoursesModal isOpen={isCoursesModalOpen} onClose={closeCoursesModal} />
    </nav>
  );
};

export default Navbar;
