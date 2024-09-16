const express = require('express');
const router = express.Router();

const {
  login,
  register,
  resetPassword,
  getInfoUsuario,
} = require('../controllers/userController');

const {
  getCatedratico,
} = require('../controllers/catedraticoController');

const {
  getPosts,
  createPost,
  filtrarPosts,
} = require('../controllers/postController');

const {
  getComentarios,
  crearComentario,
} = require('../controllers/comentariosController');

const {
  getCursos,
  agregarCurso,
  eliminarCurso,
} = require('../controllers/cursosController');

const {
  getCursosAprobados,
} = require('../controllers/cursosaprovadosController');


router.post('/login', login);

router.post('/register', register);

router.put('/reset-password', resetPassword);

router.get('/catedratico/:id', getCatedratico);

router.get('/posts/:id', getPosts);

router.get('/get-usuario', getInfoUsuario);

router.get('/comentarios', getComentarios);

router.get('/cursos', getCursos);

router.get('/cursos-aprobados', getCursosAprobados);

router.post('/crear-post', createPost);

router.post('/crear-comentario', crearComentario)

router.get('/filtrar-posts/:curso', filtrarPosts)

router.get('/filtrar-posts/:catedratico', filtrarPosts)

router.get('/filtrar-posts/:curso/:catedratico', filtrarPosts)

router.post('/agregar-curso', agregarCurso)

router.delete('/eliminar-curso', eliminarCurso)

module.exports = router;
