import React from 'react';

const PostPreview = ({ post, onPostClick, onUserClick }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer" onClick={() => onPostClick(post)}>
      <div className="flex items-center mb-2">
        <span
          className="text-lg font-semibold text-blue-500 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onUserClick(post.userId); 
          }}
        >
          {post.userName} 
        </span>
      </div>
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-gray-600">{post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}</p>
    </div>
  );
};

export default PostPreview;
