const data = require('../data/data');
const { 
  infoUsuarioQuery, 
  aprobadosQuery, 
  infoUsuariosQuery,
  crearUsuarioQuery,
  updatePasswordQuery
} = require('../models/userModel');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const infoUsuarios = await infoUsuariosQuery();

    let user;
    Object.keys(infoUsuarios).forEach((key) => {
      if (infoUsuarios[key].correo === email && infoUsuarios[key].contrasena === password) {
        user = infoUsuarios[key];
      }
    });

    if (user) {
      console.log('Login exitoso, email de usuario:', email);

      res.status(200).json({
        message: 'Login exitoso',
        carnet: user.carnet,
      });
    }

    if (user === undefined) {
      console.log('Usuario o contraseña incorrectos');
      res.status(401).send('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error');
  }
};

exports.register = async (req, res) => {
  try {
    const { nombre, apellido, email, password, registroAcademico } = req.body;

    const crearUsuarioQueryResult = await crearUsuarioQuery(
      registroAcademico,
      nombre,
      apellido,
      email,
      password,
    );

    if (crearUsuarioQueryResult) {
      console.log('Usuario creado', email);
      res.status(200).send('Usuario creado');
    }
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send('El usuario ya existe');
    } else {
      res.status(500).send('Error al crear el usuario');
    }
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, registroAcademico, newPassword } = req.body;

    const results = await updatePasswordQuery(email, registroAcademico, newPassword);

    if (results[0].affectedRows > 0) {
      console.log('Contraseña restablecida para el usuario con carnet: ', registroAcademico);
      res.status(200).send('Contraseña restablecida');
    }

    if (results[0].affectedRows === 0) {
      console.log('Usuario no encontrado o se ha ingresado la misma contraseña');
      res.status(404).send('Usuario no encontrado o se ha ingresado la misma contraseña');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error');
  }
};

exports.getInfoUsuario = async (req, res) => {
  const { carnet } = req.body;

  const infoUsuarioQueryResult = await infoUsuarioQuery(carnet);
  const aprobadosQueryResult = await aprobadosQuery(carnet);

  const infoUsuario = infoUsuarioQueryResult["0"];

  let listaAprobados = [];

  Object.keys(aprobadosQueryResult).forEach((key) => {
    listaAprobados.push(
      {
        id: aprobadosQueryResult[key].id,
        name: aprobadosQueryResult[key].nombre,
        credits: aprobadosQueryResult[key].creditos,
      }
    );
  });

  res.json({
    users: {
      id: infoUsuario.carnet,
      firstName: infoUsuario.nombres,
      lastName: infoUsuario.apellidos,
      email: infoUsuario.correo,
      approvedCourses: listaAprobados,
    },
  });
}
