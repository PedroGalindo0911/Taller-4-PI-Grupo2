const data = require('../data/data');
const { getAllCursosQuery } = require('../models/cursoModel');

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

exports.getCurso = (req, res) => {
  const { id } = req.params;
  curso = data.courses.find((item) => item.id == id);
  res.json({
    id: curso.id,
    name: curso.name,
    credits: curso.credits,
    teacherId: curso.teacherId,
  });
};
