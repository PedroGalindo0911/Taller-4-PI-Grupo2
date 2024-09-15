const data = require('../data/data');

exports.getPosts = (req, res) => {
    const { id }=req.params
    publicacion=data.posts.find (item => item.id ==id)
    res.json({
        id: publicacion.id,
        title: publicacion.title,
        content: publicacion.content,
        course: publicacion.course,
        teacher: publicacion.teacher,
        userId: publicacion.userId,
    })
  };