import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ isOpen, onClose, onProfileClick, onCoursesClick, onLogOut }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
      <ul className="text-left">
        {/* Opción de Perfil */}
        <li
          onClick={onProfileClick}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-gray-600" /> Mi Perfil
        </li>
        
        {/* Opción de Cursos */}
        <li
          onClick={onCoursesClick}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faBook} className="mr-2 text-gray-600" /> Mis Cursos
        </li>
        
        {/* Opción de Cerrar Sesión */}
        <li
          onClick={onLogOut}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-gray-600" /> LogOut
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
