const data = require('../data/data');

exports.getCursos = (req, res) => {
    curso=data.courses[0]
    res.json({
        id: curso.id, 
        name: curso.name,
        credits: curso.credits,
        teacherId: curso.teacherId,
    })
  };