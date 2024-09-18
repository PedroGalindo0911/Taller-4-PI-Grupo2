import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SERVER_HOST = "localhost";
const SERVER_PORT = "3000";
const API_RESET_PASSWORD_ENDPOINT = "/api/reset-password";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [registroAcademico, setRegistroAcademico] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://${SERVER_HOST}:${SERVER_PORT}${API_RESET_PASSWORD_ENDPOINT}`,
        { email, registroAcademico, newPassword }
      );

      if (response.status === 200) {
        navigate('/'); 
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data || 'Error inesperado.');
      } else if (error.request) {
        setError('No se recibió respuesta del servidor.');
      } else {
        setError('Error al enviar la solicitud.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 bg-cover bg-center" style={{ backgroundImage: 'url(/images/FondoContra.jpg)' }}>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Restablecer Contraseña</h1>
        
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="registroAcademico" className="block text-sm font-medium text-gray-700">Registro Académico</label>
            <input
              type="text"
              id="registroAcademico"
              value={registroAcademico}
              onChange={(e) => setRegistroAcademico(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Restablecer Contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
