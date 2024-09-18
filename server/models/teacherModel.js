const sequelize = require('../configs/mysqlConnection');

exports.getAllTeachersQuery = async (id) => {
  const [results, metadata] = await sequelize.query(
    'CALL GetAllCatedraticos();',
    {
      type: sequelize.QueryTypes.SELECT,
    },
  );

  return results;
};

exports.getCatedraticoByNameQuery = async (nombre) => {
  const [results, metadata] = await sequelize.query(
    'CALL GetCatedraticoByName(:nombre);',
    {
      replacements: { nombre },
    },
  );

  return results;
};
