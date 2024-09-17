const sequelize = require('../configs/mysqlConnection');

exports.getPostsQuery = async () => {
  'CALL GetAllPublish();';
  const [results, metadata] = await sequelize.query('CALL GetAllPublish();', {
    type: sequelize.QueryTypes.SELECT,
  });

  return results;
};
