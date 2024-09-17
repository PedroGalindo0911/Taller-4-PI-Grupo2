const sequelize = require('../configs/mysqlConnection');

exports.getAllCursosQuery = async () => {
  const [results, metadata] = await sequelize.query('CALL GetAllCourse();', {
    type: sequelize.QueryTypes.SELECT,
  });

  return results;
};
