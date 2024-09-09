import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ isOpen, onClose, onProfileClick, onCoursesClick }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20">
      <ul className="text-left">
        <li
          onClick={onProfileClick}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
        >
          <FontAwesomeIcon icon={faUserCircle} className="mr-2" /> Mi Perfil
        </li>
        <li
          onClick={onCoursesClick}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
        >
          <FontAwesomeIcon icon={faBook} className="mr-2" /> Mis Cursos
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> LogOut
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
