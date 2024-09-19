import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ProfileModal from './ProfileModal';
import CoursesModal from './CoursesModal';
import DropdownMenu from './DropdownMenu';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SERVER_HOST = 'localhost';
const SERVER_PORT = '3000';
const API_USER_ENDPOINT = '/api/get-usuario';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const carnet = Cookies.get('carnet');
      if (carnet) {
        try {
          const response = await axios.get(
            `http://${SERVER_HOST}:${SERVER_PORT}${API_USER_ENDPOINT}/${carnet}`,
          );
          setUserProfile(response.data);
          console.log('Perfil del usuario:', response.data);
        } catch (error) {
          console.error('Error al cargar el perfil del usuario:', error);
          finishSession();
        }
      } else {
        finishSession();
      }
    };

    fetchUserProfile();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
    setIsDropdownOpen(false);
  };

  const openCoursesModal = () => {
    setIsCoursesModalOpen(true);
    setIsDropdownOpen(false);
  };

  const finishSession = () => {
    Cookies.remove('carnet');
    navigate('/');
  };

  const closeProfileModal = () => setIsProfileModalOpen(false);
  const closeCoursesModal = () => setIsCoursesModalOpen(false);

  return (
    <nav className='bg-white shadow-lg py-4 px-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-semibold text-gray-800'>StudentBlog</div>

        <div className='relative'>
          <button
            onClick={toggleDropdown}
            className='focus:outline-none flex items-center space-x-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-full'
            aria-label='User menu'
          >
            <FontAwesomeIcon icon={faUser} className='text-gray-700 text-2xl' />
            {userProfile && (
              <span className='text-gray-700'>{userProfile.firstName}</span>
            )}
          </button>
          <DropdownMenu
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
            onProfileClick={openProfileModal}
            onCoursesClick={openCoursesModal}
            onLogOut={finishSession}
          />
        </div>
      </div>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={closeProfileModal}
        userProfile={userProfile}
      />
      <CoursesModal isOpen={isCoursesModalOpen} onClose={closeCoursesModal} />
    </nav>
  );
};

export default Navbar;
