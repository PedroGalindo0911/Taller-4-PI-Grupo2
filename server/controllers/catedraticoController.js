const data = require('../data/data');
const {
  getCatedraticoByNameQuery,
  getAllTeachersQuery,
} = require('../models/teacherModel');

exports.getCatedratico = async (req, res) => {
  try {
    const { nombre } = req.params;

    const catedratico = await getCatedraticoByNameQuery(nombre);

    if (!catedratico) {
      return res
        .status(404)
        .json({ mensaje: `Catedrático "${nombre}" no encontrado.` });
    }

    res.json({
      mensaje: `Catedrático: ${nombre}`,
      catedratico:catedratico["0"]
    });
  } catch (error) {
    console.error('Error fetching catedrático:', error);
    res.status(500).json({ mensaje: 'Error al obtener el catedrático.' });
  }
};

exports.getAllCatedraticos = async (req, res) => {
  try {
    const catedraticos = await getAllTeachersQuery();
    let listaCatedraticos = [];

    Object.keys(catedraticos).forEach((key) => {
      listaCatedraticos.push({
        id: catedraticos[key].id,
        name: catedraticos[key].nombre,
      });
    });
    console.log(listaCatedraticos);
    res.json(listaCatedraticos);
  } catch (error) {
    console.error('Error fetching catedráticos:', error);
    res.status(500).json({ mensaje: 'Error al obtener los catedráticos.' });
  }
};
