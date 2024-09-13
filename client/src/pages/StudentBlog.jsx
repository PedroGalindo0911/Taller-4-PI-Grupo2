import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PostFilters from '../components/PostFilters';
import PostModal from '../components/PostModal';
import UserProfileModal from '../components/UserProfileModal';

const StudentBlog = () => {
  const [posts, setPosts] = useState([]); // Maneja los posts creados
  const [selectedPost, setSelectedPost] = useState(null); // Post seleccionado
  const [selectedUserId, setSelectedUserId] = useState(null); // Usuario seleccionado

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const openPostModal = (post) => setSelectedPost(post);
  const closePostModal = () => setSelectedPost(null);

  const openUserProfileModal = (userId) => setSelectedUserId(userId);
  const closeUserProfileModal = () => setSelectedUserId(null);

  return (
    <div>
      <Navbar />
      <PostFilters onAddPost={addNewPost} />

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={closePostModal}
          onUserClick={openUserProfileModal} // Maneja clic en el usuario
        />
      )}

      {selectedUserId && (
        <UserProfileModal
          userId={selectedUserId}
          onClose={closeUserProfileModal}
        />
      )}
    </div>
  );
};

export default StudentBlog;
