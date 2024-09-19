import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import PostFilters from '../components/PostFilters';
import PostModal from '../components/PostModal';
import UserProfileModal from '../components/UserProfileModal';
import { UserContext } from '../context/UserContext';

const StudentBlog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        const uniquePosts = response.data.filter((post, index, self) =>
          index === self.findIndex((p) => p.id === post.id)
        ); // Filtra duplicados
        setPosts(uniquePosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const addNewPost = (newPost) => {
    const isDuplicate = posts.some(post => post.id === newPost.id);
    if (!isDuplicate) {
      setPosts([...posts, newPost]);
    }
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
          onUserClick={openPostModal}
        />
      )}

      {selectedUserId && (
        <UserProfileModal
          userId={selectedUserId}
          onClose={closeUserProfileModal}
          onUserClick={openUserProfileModal} 
        />
      )}
    </div>
  );
};

export default StudentBlog;
