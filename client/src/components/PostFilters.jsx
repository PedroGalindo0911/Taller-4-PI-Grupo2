import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';
import PostPreview from './PostPreview';
import PostModal from './PostModal';
import { courses, teachers, posts as initialPosts, users } from '../data/data.js';

const PostFilters = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [allPosts, setAllPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado del sidebar
  const [selectedUser, setSelectedUser] = useState(null); // Usuario seleccionado para el sidebar

  // Abrir el modal de creación de post
  const handleOpenCreatePostModal = () => {
    setIsCreatePostModalOpen(true);
  };

  // Cerrar el modal de creación de post
  const handleCloseCreatePostModal = () => {
    setIsCreatePostModalOpen(false);
  };

  // Abrir modal para ver el post completo
  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  // Cerrar modal de post completo
  const handleClosePostModal = () => {
    setIsPostModalOpen(false);
  };

  // Manejar clic en usuario para abrir el sidebar
  const handleUserClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setIsSidebarOpen(true); // Abre el sidebar con la info del usuario
  };

  // Cerrar sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false); // Cierra el sidebar
  };

  // Manejar creación de un nuevo post
  const handleCreatePost = (newPost) => {
    setAllPosts([newPost, ...allPosts]);
    setIsCreatePostModalOpen(false);
  };

  // Filtrar posts por curso y maestro seleccionados
  const filteredPosts = allPosts.filter((post) => {
    return (
      (selectedCourse === '' || post.course?.id === parseInt(selectedCourse)) &&
      (selectedTeacher === '' || post.teacher?.id === parseInt(selectedTeacher))
    );
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <div className="relative">
            <label htmlFor="course-filter" className="block text-lg font-semibold mb-2">Curso:</label>
            <select
              id="course-filter"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Seleccionar Curso</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label htmlFor="teacher-filter" className="block text-lg font-semibold mb-2">Maestro:</label>
            <select
              id="teacher-filter"
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Seleccionar Maestro</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleOpenCreatePostModal}
          className="px-4 py-2 bg-black text-white rounded shadow-md hover:bg-gray-800 transition-colors duration-300"
        >
          Crear Post
        </button>
      </div>

      {/* Mostrar posts filtrados */}
      <div className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostPreview
              key={post.id}
              post={post}
              onPostClick={handlePostClick}
              onUserClick={handleUserClick} // Maneja clic en el usuario para abrir sidebar
            />
          ))
        ) : (
          <p className="text-gray-600">No hay Posts disponibles.</p>
        )}
      </div>

      {/* Modal para crear un nuevo post */}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={handleCloseCreatePostModal}
        onCreatePost={handleCreatePost}
      />

      {/* Modal para mostrar el post completo */}
      {isPostModalOpen && selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={handleClosePostModal}
          onUserClick={handleUserClick} // Maneja clic en usuario dentro del modal
        />
      )}

      {/* Sidebar para mostrar información del usuario */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Perfil de Usuario</h2>
          <button onClick={handleCloseSidebar} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        {selectedUser && (
          <div className="p-4">
            <p><strong>Nombre:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Cursos Aprobados:</strong></p>
            <ul className="list-disc pl-6">
              {selectedUser.approvedCourses.map((course) => (
                <li key={course.id}>{course.name} - {course.credits} créditos</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostFilters;
