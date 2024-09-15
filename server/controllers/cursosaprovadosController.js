const data = require('../data/data');

exports.getCursosAprobados = (req, res) => {
    cursoaprovado=data.users[0]
    res.json({
        id: 1,
        Nombre: cursoaprovado.firstName,
        Apellido: cursoaprovado.lastName,
        Cursos_Aprobados: cursoaprovado.approvedCourses,
    })
  };