import React, { useState } from 'react';

const PostModal = ({ post, onClose }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  if (!post) return null;

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]); 
      setComment(''); 
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="mb-4">{post.content}</p>

        {/* Sección de comentarios */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Comentarios</h3>
          <div className="space-y-4 mb-4">
            {comments.length === 0 ? (
              <p className="text-gray-600">No hay comentarios todavía.</p>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="p-2 bg-gray-100 rounded-lg shadow-sm">
                  {comment}
                </div>
              ))
            )}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escribe tu comentario aquí..."
            rows="3"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={handleAddComment}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Agregar comentario
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
