const data = require('../data/data');
const { getPostsQuery, createPostQuery } = require('../models/postModel');

const { getCatedraticoByIdQuery } = require('../models/teacherModel');

const { getCursosByIdQuery } = require('../models/cursoModel');

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

  listaPosts = [];

  Object.keys(posts).forEach((key) => {
    listaPosts.push({
      id: posts[key].id,
      title: posts[key].titulo,
      content: posts[key].mensaje,
      course: posts[key].cur_id,
      teacher: posts[key].cat_id,
      userId: posts[key].usu_carnet,
    });
  });

  res.json(listaPosts);
};

exports.createPost = async (req, res) => {
  const { title, content, courseId, teacherId, userId } = req.body;

  const catedraticoQueryResult = await getCatedraticoByIdQuery(teacherId);
  const cursosQueryResult = await getCursosByIdQuery(courseId);
  try {
    if (catedraticoQueryResult && cursosQueryResult) {
      const createPostQueryResult = await createPostQuery(
        title,
        content,
        courseId,
        teacherId,
        userId,
      );

      res.json({
        mensaje: 'Publicación creada',
      });
      console.log({
        title,
        content,
        course: {
          id: cursosQueryResult.id,
          name: cursosQueryResult.nombre,
        },
        teacher: {
          id: catedraticoQueryResult.id,
          name: catedraticoQueryResult.nombre,
        },
        userId,
      });
    }
  } catch (error) {
    console.error('Error al crear el post:', error);
    res.json({
      mensaje: 'Error al crear el post',
    });
  }
};

exports.filtrarPostsCatedratico = async (req, res) => {
  const { catedratico } = req.params;

  const results = await filtrarPostsPorCatedraticoQuery(catedratico);
  console.log(results);
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
