const data = require('../data/data');
const {
  getCatedraticoByNameQuery,
  getAllTeachersQuery,
} = require('../models/teacherModel');

exports.getCatedratico = async (req, res) => {
  try {
    const { nombre } = req.body;

    const catedratico = await getCatedraticoByNameQuery(nombre);

    if (!catedratico) {
      return res
        .status(404)
        .json({ mensaje: `Catedrático "${nombre}" no encontrado.` });
    }

    res.json({
      mensaje: `Catedrático: ${nombre}`,
      catedratico,
    });
  } catch (error) {
    console.error('Error fetching catedrático:', error);
    res.status(500).json({ mensaje: 'Error al obtener el catedrático.' });
  }
};
