const data = require('../data/data');



exports.getPosts = (req, res) => {
    publicacion=data.posts[0]
    res.json({
        id: publicacion.id,
        title: publicacion.title,
        content: publicacion.content,
        course: publicacion.course,
        teacher: publicacion.teacher,
        userId: publicacion.userId,
    })
  };