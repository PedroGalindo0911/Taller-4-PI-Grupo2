import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const SERVER_HOST = 'localhost';
const SERVER_PORT = '3000';
const API_CURSOS_ENDPOINT = '/api/cursos';
const API_CATEDRATICO_ENDPOINT = '/api/catedraticos';
const API_CREAR_POST_ENDPOINT = '/api/crear-post';

const CreatePostModal = ({ isOpen, onClose, onCreatePost }) => {
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    if (isOpen) {
      axios
        .get(`http://${SERVER_HOST}:${SERVER_PORT}${API_CURSOS_ENDPOINT}`)
        .then((response) => setCourses(response.data))
        .catch((error) => console.error('Error fetching courses:', error));

      axios
        .get(`http://${SERVER_HOST}:${SERVER_PORT}${API_CATEDRATICO_ENDPOINT}`)
        .then((response) => setTeachers(response.data))
        .catch((error) => console.error('Error fetching teachers:', error));
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && selectedCourse && selectedTeacher) {
      axios
        .post(
          `http://${SERVER_HOST}:${SERVER_PORT}${API_CREAR_POST_ENDPOINT}`,
          {
            title,
            content,
            courseId: selectedCourse,
            teacherId: selectedTeacher,
            userId: user.id,
          },
        )
        .then((response) => {
          onCreatePost(response.data);
          setTitle('');
          setContent('');
          setSelectedCourse('');
          setSelectedTeacher('');
          onClose();
        })
        .catch((error) => console.error('Error creating post:', error));
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-lg'>
        <h2 className='text-xl font-bold mb-4'>Crear Nuevo Post</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Título:</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>
              Contenido:
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Curso:</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            >
              <option value=''>Seleccionar Curso</option>
              {/* {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))} */}
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Maestro:</label>
            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            >
              <option value=''>Seleccionar Maestro</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex justify-end gap-2'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 bg-gray-500 text-white rounded shadow-md hover:bg-gray-600'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600'
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
