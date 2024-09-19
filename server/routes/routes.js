const express = require('express');
const router = express.Router();

const {
  login,
  register,
  resetPassword,
  getInfoUsuario,
} = require('../controllers/userController');

const { getCatedratico } = require('../controllers/catedraticoController');

const {
  getPost,
  getAllPosts,
  createPost,
  filtrarPostsCurso,
  filtrarPostsCatedratico,
  filtrarPostsCursoCatedratico,
} = require('../controllers/postController');

const {
  getComentarios,
  crearComentario,
} = require('../controllers/comentariosController');

const {
  getCursos,
  getCurso,
  agregarCurso,
  eliminarCurso,
} = require('../controllers/cursosController');

const {
  getCursosAprobados,
} = require('../controllers/cursosaprovadosController');

router.post('/login', login); //Pedro

router.post('/register', register); // Pedro

router.put('/reset-password', resetPassword); // Pedro

router.get('/catedratico', getCatedratico);//Pablo

router.get('/posts/:id', getPost);

router.get('/posts', getAllPosts); // Pedro

router.get('/get-usuario', getInfoUsuario); // Pedro

router.get('/comentarios', getComentarios);

router.get('/cursos', getCursos);

router.get('/cursos/:id', getCurso);

router.get('/cursos-aprobados', getCursosAprobados);

router.post('/crear-post', createPost); // Pedro

router.post('/crear-comentario', crearComentario); // Pedro

router.get('/filtrar-posts-curso/:curso', filtrarPostsCurso); // Pedro

router.get('/filtrar-posts-catedratico/:catedratico', filtrarPostsCatedratico); // Pedro

router.get(
  '/filtrar-posts-curso-catedratico/:curso/:catedratico',
  filtrarPostsCursoCatedratico,
); // Pedro

router.post('/agregar-curso', agregarCurso);

router.delete('/eliminar-curso', eliminarCurso);

module.exports = router;
