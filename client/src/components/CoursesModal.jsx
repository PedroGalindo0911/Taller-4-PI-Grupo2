import React, { useState } from 'react';
import { courses, users } from '../data/data.js';

const CoursesModal = ({ isOpen, onClose }) => {
  const user = users[0];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState(user.approvedCourses);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(
    courses.filter(course => !user.approvedCourses.some(approved => approved.id === course.id))
  );

  if (!isOpen) return null;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setFilteredCourses(
      courses.filter(course =>
        course.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
        !selectedCourses.some(approved => approved.id === course.id)
      )
    );
  };

  const handleAddCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    setDropdownOpen(false);
    setSearchTerm('');
    setFilteredCourses(
      courses.filter(course =>
        !selectedCourses.some(approved => approved.id === course.id)
      )
    );
  };

  const handleRemoveCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter(course => course.id !== courseId));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Mis Cursos</h2>
        
        {/* Display selected courses */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Cursos Aprobados:</h3>
          <div className="space-y-4">
            {selectedCourses.map(course => (
              <div key={course.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                <span className="text-gray-700 font-medium">{course.name} ({course.credits} créditos)</span>
                <button
                  onClick={() => handleRemoveCourse(course.id)}
                  className="text-red-500 hover:text-red-600 focus:outline-none transition-colors"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-medium text-gray-800">Total Créditos: {selectedCourses.reduce((acc, course) => acc + course.credits, 0)}</span>
          </div>
        </div>

        {/* Dropdown to add courses */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none"
          >
            {searchTerm || 'Buscar y añadir curso'}
          </button>
          {dropdownOpen && (
            <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar curso..."
                className="w-full p-3 border-b border-gray-200 focus:outline-none"
              />
              <ul className="max-h-60 overflow-y-auto">
                {filteredCourses.map(course => (
                  <li
                    key={course.id}
                    onClick={() => handleAddCourse(course)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  >
                    <span className="text-gray-700">{course.name}</span>
                    <span className="text-gray-500">({course.credits} créditos)</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 mt-6 transition-colors w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CoursesModal;
