import React from 'react';
import Navbar from '../components/Navbar';

const StudentBlog = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contenido de la página principal */}
      <div className="container mx-auto p-4">
        {/* Aquí va el contenido de tu blog */}
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        {/* Más contenido */}
      </div>
    </div>
  );
};

export default StudentBlog;
