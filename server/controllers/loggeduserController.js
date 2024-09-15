const data = require('../data/data');

exports.getLoggedUser = (req, res) => {
    usuario=data.users[0]
    res.json({
        id: usuario.id,
        firstName: usuario.firstName,
        lastName: usuario.lastName,
        email: usuario.email,
    })
  };