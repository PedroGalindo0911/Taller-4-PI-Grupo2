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
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          StudentBlog
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <FontAwesomeIcon icon={faUser} className="text-black text-2xl" />
          </button>
          <DropdownMenu
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
            onProfileClick={openProfileModal}
            onCoursesClick={openCoursesModal}
          />
        </div>
      </div>
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
      <CoursesModal isOpen={isCoursesModalOpen} onClose={closeCoursesModal} />
    </nav>
  );
};

export default Navbar;
