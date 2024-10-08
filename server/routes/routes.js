const express = require('express');
const router = express.Router();

const {
  login,
  register,
  resetPassword,
  getInfoUsuario,
  getAllUsers,
} = require('../controllers/userController');

const {
  getCatedratico,
  getAllCatedraticos,
} = require('../controllers/catedraticoController');

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

router.get('/catedratico/:nombre', getCatedratico); //Pablo


router.get('/posts/:id', getPost);

router.get('/posts', getAllPosts); // Pedro

router.get('/get-usuario/:carnet', getInfoUsuario); // Pedro

router.get('/user', getAllUsers);

router.get('/catedraticos', getAllCatedraticos);//** 

router.get('/comentarios', getComentarios);

router.get('/cursos', getCursos);

router.get('/curso/:nombre', getCurso);

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
