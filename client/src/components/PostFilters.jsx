// src/components/PostFilters.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePostModal from './CreatePostModal';
import PostPreview from './PostPreview';
import PostModal from './PostModal';

const SERVER_HOST = "localhost";
const SERVER_PORT = "3000";
const API_COURSES_ENDPOINT = `/cursos`;
const API_TEACHERS_ENDPOINT = `/catedratico`;
const API_POSTS_ENDPOINT = `/posts`;
const API_USER_ENDPOINT = `/get-usuario`;

const PostFilters = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, teachersRes, postsRes, usersRes] = await Promise.all([
          axios.get(`http://${SERVER_HOST}:${SERVER_PORT}${API_COURSES_ENDPOINT}`),
          axios.get(`http://${SERVER_HOST}:${SERVER_PORT}${API_TEACHERS_ENDPOINT}`),
          axios.get(`http://${SERVER_HOST}:${SERVER_PORT}${API_POSTS_ENDPOINT}`),
          axios.get(`http://${SERVER_HOST}:${SERVER_PORT}${API_USER_ENDPOINT}`)
        ]);

        setCourses(coursesRes.data);
        setTeachers(teachersRes.data);
        setAllPosts(postsRes.data);
        setUsers(usersRes.data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredPosts = async () => {
      try {
        let url = `${API_POSTS_ENDPOINT}`;
        if (selectedCourse && selectedTeacher) {
          url = `/filtrar-posts-curso-catedratico/${selectedCourse}/${selectedTeacher}`;
        } else if (selectedCourse) {
          url = `/filtrar-posts-curso/${selectedCourse}`;
        } else if (selectedTeacher) {
          url = `/filtrar-posts-catedratico/${selectedTeacher}`;
        }

        const postsRes = await axios.get(`http://${SERVER_HOST}:${SERVER_PORT}${url}`);
        setAllPosts(postsRes.data);
      } catch (error) {
        console.error('Error al filtrar los posts:', error);
      }
    };

    fetchFilteredPosts();
  }, [selectedCourse, selectedTeacher]);

  const handleOpenCreatePostModal = () => setIsCreatePostModalOpen(true);
  const handleCloseCreatePostModal = () => setIsCreatePostModalOpen(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  const handleClosePostModal = () => setIsPostModalOpen(false);

  const handleUserClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleCreatePost = async (newPost) => {
    try {
      await axios.post(`http://${SERVER_HOST}:${SERVER_PORT}/crear-post`, newPost);
      setAllPosts([newPost, ...allPosts]);
      setIsCreatePostModalOpen(false);
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

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
          aria-label="Crear Post"
        >
          Crear Post
        </button>
      </div>

      <div className="space-y-4">
        {allPosts.length > 0 ? (
          allPosts.map((post) => (
            <PostPreview
              key={post.id}
              post={post}
              onPostClick={handlePostClick}
              onUserClick={handleUserClick}
            />
          ))
        ) : (
          <p className="text-gray-600">No hay Posts disponibles.</p>
        )}
      </div>

      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={handleCloseCreatePostModal}
        onCreatePost={handleCreatePost}
      />

      {isPostModalOpen && selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={handleClosePostModal}
          onUserClick={handleUserClick}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Perfil de Usuario</h2>
          <button onClick={handleCloseSidebar} className="text-gray-500 hover:text-gray-700" aria-label="Cerrar Sidebar">
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
