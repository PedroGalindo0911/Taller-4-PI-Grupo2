import React from 'react';

const ProfileModal = ({ isOpen, onClose, userProfile }) => {
  if (!isOpen || !userProfile) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfil del Usuario</h2>
        <div className="space-y-4">
          <p className="text-lg">
            <strong className="text-gray-700">Nombre:</strong> {userProfile.firstName}
          </p>
          <p className="text-lg">
            <strong className="text-gray-700">Apellido:</strong> {userProfile.lastName}
          </p>
          <p className="text-lg">
            <strong className="text-gray-700">Correo:</strong> {userProfile.email}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
