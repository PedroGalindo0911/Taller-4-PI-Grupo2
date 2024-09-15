const express = require('express');
const router = express.Router();

const {
  login,
  register,
  resetPassword,
} = require('../controllers/userController');

router.post('/login', login);

router.post('/register', register);

router.put('/reset-password', resetPassword);
/* 
router.post('/crear-post', createPost);

router.get('/catedratico', getCatedratico);

router.get('/logged-user', getLoggedUser);

router.get('/cursos', getCursos)

router.get('/posts', getPosts)

router.get('/filtrar-por-curso/:curso', filtrarCursos)

router.get('/filtrar-por-catedratico/:catedratico', filtrarCatedratico)

router.get('/comentarios', getComentarios)

router.post('/crear-comentario', crearComentario)

router.get('/cursos-aprobados', getCursosAprobados)

router.post('/agregar-curso', agregarCurso)

router.delete('/eliminar-curso', eliminarCurso)
*/

module.exports = router;
