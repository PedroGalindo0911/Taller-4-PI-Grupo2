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

exports.crearComentario = (req, res) => {
    const { content, postId, userId } = req.body;
    const newComment = {
        id: data.commentsData[1].length + 1,
        content,
        postId,
        userId,
    };

    data.commentsData[postId].push(newComment);

    res.json(newComment);
    console.log(data.commentsData[postId]);
}