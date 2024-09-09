import React from 'react';
import { userProfile } from '../data/data.js'; // Ajusta la ruta si es necesario

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Mi Perfil</h2>
        <div className="mb-4">
          <p><strong>Nombre:</strong> {userProfile.firstName}</p>
          <p><strong>Apellido:</strong> {userProfile.lastName}</p>
          <p><strong>Correo:</strong> {userProfile.email}</p>
        </div>
        <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded">Cerrar</button>
      </div>
    </div>
  );
};

export default ProfileModal;
