const data = require('../data/data');

exports.getComentarios = (req, res) => {
    lista_comentarios=data.commentsData[1]
    comentario=lista_comentarios[0]
    res.json({
        id: comentario.id,
        firstName: comentario.firstName,
        lastName: comentario.lastName,
        content: comentario.content,
        postId: comentario.postId,
        userId: comentario.userId,
    })
  };