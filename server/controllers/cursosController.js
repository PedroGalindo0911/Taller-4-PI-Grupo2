const data = require('../data/data');
const { getAllCursosQuery, getCursosByIdQuery, getCursoByName } = require('../models/cursoModel');

exports.getCursos = async(req, res) => {

  try {
    const cursos = await getAllCursosQuery();
    let listaCursos = [];

    Object.keys(cursos).forEach((key) => {
      listaCursos.push({
        id: cursos[key].id,
        name: cursos[key].nombre,
      });
    });
    console.log(listaCursos);
    res.json(listaCursos);
  } catch (error) {
    console.error('Error fetching cursos:', error);
    res.status(500).json({ mensaje: 'Error al obtener los cursos.' });
  }
};

exports.agregarCurso = (req, res) => {
  const { name, credits, teacherId } = req.body;
  const newCourse = {
    id: data.courses.length + 1,
    name,
    credits,
    teacherId,
  };
  data.courses.push(newCourse);
  res.json(newCourse);
  console.log(data.courses);
};

exports.eliminarCurso = (req, res) => {
  const { id } = req.body;
  const index = data.courses.findIndex((course) => course.id == id);
  data.courses.splice(index, 1);
  res.json(data.courses);
  console.log(data.courses);
};

exports.getCurso = async(req, res) => {
  try {
    const { nombre } = req.params;

    const curso = await getCursoByName(nombre);

    if (!curso) {
      return res
        .status(404)
        .json({ mensaje: `curso "${nombre}" no encontrado.` });
    }

    res.json({
      mensaje: `curso: ${nombre}`,
      curso:curso["0"]
    });
  } catch (error) {
    console.error('Error fetching curso:', error);
    res.status(500).json({ mensaje: 'Error al obtener el curso.' });
  }
};
