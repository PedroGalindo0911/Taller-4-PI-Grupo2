const data = require('../data/data');

exports.getCatedratico = (req, res) => {
    const { id }=req.params
    catedratico=data.teachers.find(item => item.id == id)
    res.json({
        id:catedratico.id,
        name:catedratico.name,
    })
  };