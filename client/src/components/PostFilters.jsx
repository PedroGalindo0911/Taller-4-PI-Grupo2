import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';
import PostPreview from './PostPreview';
import PostModal from './PostModal';
import { courses, teachers, posts as initialPosts } from '../data/data.js';

const PostFilters = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [allPosts, setAllPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const handleOpenCreatePostModal = () => {
    setIsCreatePostModalOpen(true);
  };

  const handleCloseCreatePostModal = () => {
    setIsCreatePostModalOpen(false);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  const handleClosePostModal = () => {
    setIsPostModalOpen(false);
  };


  const handleCreatePost = (newPost) => {
    setAllPosts([newPost, ...allPosts]); 
    setIsCreatePostModalOpen(false); 
  };

  
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

      {/* Mostrar los posts filtrados */}
      <div className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostPreview
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post)} 
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
        />
      )}
    </div>
  );
};

export default PostFilters;
