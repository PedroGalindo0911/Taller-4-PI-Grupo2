import React from 'react';

const PostPreview = ({ post, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition-colors duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
      <p className="text-gray-600 truncate">{post.content}</p>
      <div className="text-gray-500 text-sm mt-2">
        <span>Curso: {post.course.name}</span> | <span>Maestro: {post.teacher.name}</span>
      </div>
    </div>
  );
};

export default PostPreview;
