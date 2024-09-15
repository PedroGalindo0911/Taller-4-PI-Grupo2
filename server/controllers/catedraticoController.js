const data = require('../data/data');

exports.getCatedratico = (req, res) => {
    const { id }=req.params
    console.log("hola")
    catedratico=data.teachers.find(item => item.id == id)
    res.json({
        id:catedratico.id,
        name:catedratico.name,
    })
  };

  exports.postCatedratico = (req, res) => {
    console.log(req.body)
    const { id }=req.body
    
    catedratico=data.teachers.find(item => item.id == id)
    res.json({
        id:catedratico.id,
        name:catedratico.name,
    })
  };