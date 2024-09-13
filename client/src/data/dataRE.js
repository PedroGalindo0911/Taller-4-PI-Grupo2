// src/data/data.js

let users4 = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@example.com',
      password: 'contraseña123', // Nota: En una aplicación real, las contraseñas deben estar encriptadas
      registroAcademico: '123456'
    }
  ];
  
  export const addUser = (user) => {
    users4.push(user);
  };
  
  export const getUsers = () => users4;
  
  export const resetPassword = (email, registroAcademico) => {
    const user = users4.find(user => user.email === email && user.registroAcademico === registroAcademico);
    
    if (user) {
      // Aquí puedes actualizar la contraseña del usuario
      user.password = 'nuevaContraseña'; // Establecer una nueva contraseña, en un caso real deberías permitir que el usuario defina la nueva contraseña
      return true;
    }
    
    return false;
  };
  