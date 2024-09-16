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

exports.agregarCurso = (req, res) => {
    const { name, credits, teacherId } = req.body;
    const newCourse = {
        id: data.courses.length + 1,
        name,
        credits,
        teacherId,
    };
    data.courses.push(newCourse);
    res.json(newCourse);
    console.log(data.courses);
}

exports.eliminarCurso = (req, res) => {
    const { id } = req.body;
    const index = data.courses.findIndex((course) => course.id == id);
    data.courses.splice(index, 1);
    res.json(data.courses);
    console.log(data.courses);
}