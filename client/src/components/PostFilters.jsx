import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';
import { courses, teachers } from '../data/data.js'; 

const PostFilters = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleOpenCreatePostModal = () => {
    setIsCreatePostModalOpen(true);
  };

  const handleCloseCreatePostModal = () => {
    setIsCreatePostModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6">
          <div className="relative">
            <label htmlFor="course-filter" className="block text-lg font-semibold text-gray-700 mb-2">Curso:</label>
            <select id="course-filter" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Seleccionar Curso</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <label htmlFor="teacher-filter" className="block text-lg font-semibold text-gray-700 mb-2">Maestro:</label>
            <select id="teacher-filter" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Seleccionar Maestro</option>
              {teachers.map(teacher => (
                <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={handleOpenCreatePostModal}
          className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
        >
          Crear Post
        </button>
      </div>

      {/* Modal para crear posts */}
      <CreatePostModal isOpen={isCreatePostModalOpen} onClose={handleCloseCreatePostModal} />
    </div>
  );
};

export default PostFilters;
