import React, { useState } from 'react';
import PostModal from './PostModal';

const PostsList = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const handleOpenPostModal = (post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  const handleClosePostModal = () => {
    setIsPostModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Posts Recientes</h2>
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p>No hay posts disponibles.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition duration-300"
              onClick={() => handleOpenPostModal(post)}
              aria-label={`Ver post: ${post.title}`}
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">
                {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
              </p>
            </div>
          ))
        )}
      </div>

      {selectedPost && (
        <PostModal
          post={selectedPost}
          isOpen={isPostModalOpen}
          onClose={handleClosePostModal}
        />
      )}
    </div>
  );
};

export default PostsList;
