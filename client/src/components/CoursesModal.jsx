import React, { useState } from 'react'; // Asegúrate de importar useState
import { approvedCourses, allCourses } from '../data/data.js'; // Ajusta la ruta si es necesario

const CoursesModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState(approvedCourses);
  const [availableCourses, setAvailableCourses] = useState(allCourses);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdownCourse, setSelectedDropdownCourse] = useState(null);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    setAvailableCourses(availableCourses.filter(c => c.id !== course.id));
    setDropdownOpen(false);
    setSelectedDropdownCourse(null);
  };

  const handleRemoveCourse = (course) => {
    setAvailableCourses([...availableCourses, course]);
    setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
  };

  const filteredCourses = availableCourses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCredits = selectedCourses.reduce((acc, course) => acc + course.credits, 0);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Mis Cursos</h2>
        
        {/* Cursos Aprobados */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Cursos Aprobados</h3>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {selectedCourses.map(course => (
              <div key={course.id} className="flex justify-between items-center border p-2 rounded-lg bg-gray-100">
                <span>{course.name}</span>
                <span>{course.credits} créditos</span>
                <button onClick={() => handleRemoveCourse(course)} className="text-red-500">Eliminar</button>
              </div>
            ))}
          </div>
          <p className="text-lg"><strong>Total Créditos:</strong> {totalCredits}</p>
        </div>

        {/* Dropdown para Agregar Cursos */}
        <div>
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            className="border px-4 py-2 rounded w-full flex justify-between items-center mb-4 bg-gray-100"
          >
            {selectedDropdownCourse ? selectedDropdownCourse.name : 'Seleccionar curso...'}
            <span className={`ml-2 ${dropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
          </button>
          {dropdownOpen && (
            <div className="border rounded-lg bg-white shadow-lg absolute w-full max-h-60 overflow-auto">
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={handleSearch}
                className="border-b px-4 py-2 w-full"
              />
              <ul>
                {filteredCourses.map(course => (
                  <li 
                    key={course.id} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSelectedDropdownCourse(course);
                      handleAddCourse(course);
                    }}
                  >
                    {course.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cerrar</button>
      </div>
    </div>
  );
};

export default CoursesModal;