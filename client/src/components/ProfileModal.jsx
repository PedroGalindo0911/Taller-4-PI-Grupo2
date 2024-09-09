import React from 'react';
import { users } from '../data/data.js';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const user = users[0];

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Perfil del Usuario</h2>
        <div className="mb-4">
          <p><strong>Nombre:</strong> {user.firstName}</p>
          <p><strong>Apellido:</strong> {user.lastName}</p>
          <p><strong>Correo:</strong> {user.email}</p>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded shadow-md hover:bg-gray-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
