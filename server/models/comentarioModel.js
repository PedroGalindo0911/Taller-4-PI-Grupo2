const sequelize = require('../configs/mysqlConnection');

exports.createComentarioQuery = async (content, postId, userId) => {
  const results = await sequelize.query(
    'CALL CreateComment(:content, :userId, :postId)',
    {
      replacements: { content, userId, postId },
    },
  );
  return results;
};
