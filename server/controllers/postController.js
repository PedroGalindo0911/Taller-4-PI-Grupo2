const data = require('../data/data');
const { getPostsQuery, createPostQuery } = require('../models/postModel');

const { getCatedraticoByNameQuery } = require('../models/teacherModel');

const { getAllCursosQuery } = require('../models/cursoModel');

const {
  filtrarPostsPorCatedraticoQuery,
  filtrarPostsPorCursoQuery,
} = require('../models/postModel');

exports.getPost = (req, res) => {
  res.json({
    mensaje: 'controlador getpost',
  });
};

exports.getAllPosts = async (req, res) => {
  const posts = await getPostsQuery();

  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { title, content, course, teacher, userId } = req.body;

  const catedraticoQueryResult = await getCatedraticoByNameQuery(teacher);

  const idCatedratico = catedraticoQueryResult.id;

  const cursosQueryResult = await getAllCursosQuery();

  listaCursos = [];

  Object.keys(cursosQueryResult).forEach((key) => {
    listaCursos.push({
      nombre: cursosQueryResult[key].nombre,
      id: cursosQueryResult[key].id,
    });
  });

  const curso = listaCursos.find((curso) => curso.nombre === course);

  const createPostQueryResult = await createPostQuery(
    title,
    content,
    curso.id,
    idCatedratico,
    userId,
  );

  res.json({
    mensaje: 'Publicación creada',
  });
  console.log({
    title,
    content,
    course,
    teacher,
    userId,
  });
};

exports.filtrarPostsCatedratico = async (req, res) => {
  const { catedratico } = req.params;

  const results = await filtrarPostsPorCatedraticoQuery(catedratico);

  listaPosts = [];

  Object.keys(results).forEach((key) => {
    listaPosts.push({
      id: results[key].id,
      title: results[key].titulo,
      content: results[key].mensaje,
      course: results[key].cur_id,
      teacher: results[key].cat_id,
      userId: results[key].usu_carnet,
    });
  });

  res.json(listaPosts);

  console.log('Posts filtrados por catedratico:', listaPosts);
};

exports.filtrarPostsCurso = async (req, res) => {
  const { curso } = req.params;
  const results = await filtrarPostsPorCursoQuery(curso);

  listaPosts = [];

  Object.keys(results).forEach((key) => {
    listaPosts.push({
      id: results[key].id,
      title: results[key].titulo,
      content: results[key].mensaje,
      course: results[key].cur_id,
      teacher: results[key].cat_id,
      userId: results[key].usu_carnet,
    });
  });

  res.json(listaPosts);

  console.log('Posts filtrados por curso:', listaPosts);
};

exports.filtrarPostsCursoCatedratico = async (req, res) => {
  const { curso, catedratico } = req.params;

  const filtroCursoResults = await filtrarPostsPorCursoQuery(curso);
  const filtroCatedraticoResults = await filtrarPostsPorCatedraticoQuery(
    catedratico,
  );

  listaPosts = [];

  Object.keys(filtroCursoResults).forEach((key) => {
    listaPosts.push({
      id: filtroCursoResults[key].id,
      title: filtroCursoResults[key].titulo,
      content: filtroCursoResults[key].mensaje,
      course: filtroCursoResults[key].cur_id,
      teacher: filtroCursoResults[key].cat_id,
      userId: filtroCursoResults[key].usu_carnet,
    });
  });

  Object.keys(filtroCatedraticoResults).forEach((key) => {
    listaPosts.push({
      id: filtroCatedraticoResults[key].id,
      title: filtroCatedraticoResults[key].titulo,
      content: filtroCatedraticoResults[key].mensaje,
      course: filtroCatedraticoResults[key].cur_id,
      teacher: filtroCatedraticoResults[key].cat_id,
      userId: filtroCatedraticoResults[key].usu_carnet,
    });
  });

  res.json(listaPosts);

  console.log('Posts filtrados por curso y catedratico:', listaPosts);
};
