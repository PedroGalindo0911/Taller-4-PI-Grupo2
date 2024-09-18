const data = require('../data/data');
const { createComentarioQuery } = require('../models/comentarioModel');

exports.getComentarios = (req, res) => {
  lista_comentarios = data.commentsData[1];
  comentario = lista_comentarios[0];
  res.json({
    id: comentario.id,
    firstName: comentario.firstName,
    lastName: comentario.lastName,
    content: comentario.content,
    postId: comentario.postId,
    userId: comentario.userId,
  });
};

exports.crearComentario = (req, res) => {
  const { content, postId, userId } = req.body;

  const crearComentarioQueryResult = createComentarioQuery(
    content,
    postId,
    userId,
  );

  res.json({
    mensaje: 'Comentario creado',
  });

  console.log('comentario creado: ', {
    contenido: content,
    idPost: postId,
    idUser: userId,
  });
};
