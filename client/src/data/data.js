// Usuarios
export const users = [
  {
    id: 1,
    firstName: 'Pedro',
    lastName: 'González',
    email: 'pedro.gonzalez@example.com',
    approvedCourses: [
      { id: 1, name: 'Matemáticas Avanzadas', credits: 4 },
      { id: 2, name: 'Historia del Arte', credits: 3 },
      { id: 3, name: 'Programación Web', credits: 5 },
    ],
  },
];

// Cursos
export const courses = [
  { id: 1, name: 'Matemáticas Avanzadas', credits: 4, teacherId: 1 },
  { id: 2, name: 'Historia del Arte', credits: 3, teacherId: 2 },
  { id: 3, name: 'Programación Web', credits: 5, teacherId: 3 },
  { id: 4, name: 'Biología', credits: 3, teacherId: 1 },
  { id: 5, name: 'Literatura', credits: 2, teacherId: 2 },
  { id: 6, name: 'Física', credits: 4, teacherId: 1 },
  { id: 7, name: 'IPC1', credits: 3, teacherId: 3 },
  { id: 8, name: 'Inter1', credits: 2, teacherId: 2 },
  { id: 9, name: 'Física 2', credits: 4, teacherId: 1 },
  { id: 10, name: 'IPC2', credits: 3, teacherId: 3 },
  { id: 11, name: 'Inter2', credits: 2, teacherId: 2 },
  { id: 12, name: 'Mate Computo', credits: 4, teacherId: 1 },
];

// Maestros
export const teachers = [
  { id: 1, name: 'Dr. Martínez' },
  { id: 2, name: 'Prof. López' },
  { id: 3, name: 'Sra. Fernández' },
];

// Posts (ahora con referencia a curso y maestro)
export const posts = [
  { id: 1, title: 'Primer Post', content: 'Este es el contenido del primer post.', course: { id: 1, name: 'Matemáticas Avanzadas' }, teacher: { id: 1, name: 'Dr. Martínez' }, userId: 1 },
  { id: 2, title: 'Segundo Post', content: 'Este es el contenido del segundo post.', course: { id: 3, name: 'Programación Web' }, teacher: { id: 3, name: 'Sra. Fernández' }, userId: 1 },
];

// Comentarios (con referencia al postId y userId)
export const commentsData = {
  1: [
    { id: 1, content: 'Gran post, me gustó mucho!', postId: 1, userId: 2 },
    { id: 2, content: '¿Puedes expandir más sobre este tema?', postId: 1, userId: 3 },
  ],
  2: [
    { id: 1, content: 'Interesante perspectiva, gracias por compartir.', postId: 2, userId: 1 },
  ],
};
