const data = require('../data/data');
const { getAllTeachersQuery } = require('../models/teacherModel');

exports.getCatedratico = (req, res) => {
  const { id } = req.params;
  catedratico = data.teachers.find((item) => item.id == id);
  res.json({
    id: catedratico.id,
    name: catedratico.name,
  });
};

exports.getAllCatedraticos = async (req, res) => {
  const catedraticos = await getAllTeachersQuery();

  listaCatedraticos = [];

  Object.keys(catedraticos).forEach((key) => {
    listaCatedraticos.push({
      id: catedraticos[key].id,
      name: catedraticos[key].nombre,
    });
  });

  res.json(listaCatedraticos);
  console.log(listaCatedraticos);
};
