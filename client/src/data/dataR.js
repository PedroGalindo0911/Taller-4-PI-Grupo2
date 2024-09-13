let users3 = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@example.com',
      password: 'contraseña123', // Nota: En una aplicación real, las contraseñas deben estar encriptadas
      registroAcademico: '123456'
    }
  ];
  
  export const addUser = (user) => {
    users3.push(user);
  };
  
  export const getUsers = () => users3;
  