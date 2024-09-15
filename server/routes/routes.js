const express = require('express');
const router = express.Router();

const {
  login,
  register,
  resetPassword,
} = require('../controllers/userController');

const {
  getCatedratico,
} = require('../controllers/catedraticoController');

const {
  getPosts,
} = require('../controllers/postController');

const {
  getLoggedUser,
} = require('../controllers/loggeduserController');

const {
  getComentarios,
} = require('../controllers/comentariosController');

const {
  getCursos,
} = require('../controllers/cursosController');

const {
  getCursosAprobados,
} = require('../controllers/cursosaprovadosController');


router.post('/login', login);

router.post('/register', register);

router.put('/reset-password', resetPassword);

router.get('/catedratico/:id', getCatedratico);

router.get('/posts/:id', getPosts);

router.get('/logged-user', getLoggedUser);

router.get('/comentarios', getComentarios);

router.get('/cursos', getCursos);

router.get('/cursos-aprobados', getCursosAprobados);


/* 
router.post('/crear-post', createPost);

router.get('/filtrar-por-curso/:curso', filtrarCursos)

router.get('/filtrar-por-catedratico/:catedratico', filtrarCatedratico)

router.post('/crear-comentario', crearComentario)

router.post('/agregar-curso', agregarCurso)

router.delete('/eliminar-curso', eliminarCurso)
*/

module.exports = router;
