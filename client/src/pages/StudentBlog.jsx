import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PostFilters from '../components/PostFilters';
import PostModal from '../components/PostModal'; 
import { posts as initialPosts } from '../data/data.js'; 

const StudentBlog = () => {
  const [posts, setPosts] = useState(initialPosts || []); 
  const [selectedPost, setSelectedPost] = useState(null); 

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]); 
  };

  const openPostModal = (post) => {
    setSelectedPost(post);
  };

  const closePostModal = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <Navbar />
      
      {/* PostFilters maneja la creación de posts y filtra los existentes */}
      <PostFilters onAddPost={addNewPost} /> 

      {/* Modal para ver el post completo */}
      {selectedPost && (
        <PostModal 
          post={selectedPost} 
          onClose={closePostModal} 
        />
      )}
    </div>
  );
};

export default StudentBlog;
