const data = require('../data/data');
const { getPostsQuery, createPostQuery } = require('../models/postModel');

const { getAllTeachersQuery } = require('../models/teacherModel');

const { getAllCursosQuery } = require('../models/cursoModel');

exports.getPost = (req, res) => {
  const { id } = req.params;
  publicacion = data.posts.find((item) => item.id == id);
  res.json({
    id: publicacion.id,
    title: publicacion.title,
    content: publicacion.content,
    course: publicacion.course,
    teacher: publicacion.teacher,
    userId: publicacion.userId,
  });
};

exports.getAllPosts = async (req, res) => {
  const posts = await getPostsQuery();

  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { title, content, course, teacher, userId } = req.body;

  const catedraticosQueryResult = await getAllTeachersQuery();

  listaCatedraticos = [];

  Object.keys(catedraticosQueryResult).forEach((key) => {
    listaCatedraticos.push({
      nombre: catedraticosQueryResult[key].nombre,
      id: catedraticosQueryResult[key].id,
    });
  });

  const catedratico = listaCatedraticos.find(
    (catedratico) => catedratico.nombre === teacher,
  );

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
    catedratico.id,
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

exports.filtrarPosts = (req, res) => {
  if (req.params.curso) {
    const { curso } = req.params;
    const posts = data.posts.filter((post) => post.course.name === curso);
    res.json(posts);
  }

  if (req.params.catedratico) {
    const { catedratico } = req.params;
    const posts = data.posts.filter(
      (post) => post.teacher.name === catedratico,
    );
    res.json(posts);
  }
};
