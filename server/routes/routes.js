const express = require('express');
const router = express.Router();

const {
  login,
  register,
  resetPassword,
} = require('../controllers/userController');

const {
  getCatedratico,
  postCatedratico,
} = require('../controllers/catedraticoController');

const {
  getPosts,
} = require('../controllers/postController');

router.post('/login', login);

router.post('/register', register);

router.put('/reset-password', resetPassword);

router.get('/catedratico/:id', getCatedratico);

router.post('/catedratico', postCatedratico);

router.get('/posts', getPosts);
/* 
router.post('/crear-post', createPost);



router.get('/logged-user', getLoggedUser);

router.get('/cursos', getCursos)



router.get('/filtrar-por-curso/:curso', filtrarCursos)

router.get('/filtrar-por-catedratico/:catedratico', filtrarCatedratico)

router.get('/comentarios', getComentarios)

router.post('/crear-comentario', crearComentario)

router.get('/cursos-aprobados', getCursosAprobados)

router.post('/agregar-curso', agregarCurso)

router.delete('/eliminar-curso', eliminarCurso)
*/

module.exports = router;
