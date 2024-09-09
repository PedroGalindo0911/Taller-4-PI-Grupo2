
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

export const courses = [
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

export const teachers = [
  { id: 1, name: 'Dr. Martínez' },
  { id: 2, name: 'Prof. López' },
  { id: 3, name: 'Sra. Fernández' },
];
