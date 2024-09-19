import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_HOST = "localhost";
const SERVER_PORT = "3000";
const API_USER_ENDPOINT = `/user`;

const UserProfileModal = ({ userId, onClose }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://${SERVER_HOST}:${SERVER_PORT}${API_USER_ENDPOINT}/${userId}`);
        setUser(response.data);
      } catch (error) {
        setError('Error al cargar el perfil del usuario.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (!userId || loading) return null; 

  if (error) return <div className="text-red-500">{error}</div>;

  const totalCredits = user.approvedCourses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-700 transition"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{user.firstName} {user.lastName}</h2>
        <p>Email: {user.email}</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Cursos Aprobados</h3>
        <ul className="list-disc pl-5">
          {user.approvedCourses.map((course) => (
            <li key={course.id}>{course.name} - {course.credits} créditos</li>
          ))}
        </ul>
        <p className="mt-4 font-semibold">Total de créditos: {totalCredits}</p>
      </div>
    </div>
  );
};

export default UserProfileModal;
