import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle, faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileModal from './ProfileModal';
import CoursesModal from './CoursesModal';

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

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const closeCoursesModal = () => {
    setIsCoursesModalOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo del Blog */}
        <div className="text-2xl font-bold text-black">
          StudentBlog
        </div>

        {/* Icono de usuario con dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <FontAwesomeIcon icon={faUser} className="text-black text-2xl" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20">
              <ul className="text-left">
                <li onClick={openProfileModal} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                  <FontAwesomeIcon icon={faUserCircle} className="mr-2" /> Mi Perfil
                </li>
                <li onClick={openCoursesModal} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                  <FontAwesomeIcon icon={faBook} className="mr-2" /> Mis Cursos
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> LogOut
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Modales */}
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
      <CoursesModal isOpen={isCoursesModalOpen} onClose={closeCoursesModal} />
    </nav>
  );
};

export default Navbar;
