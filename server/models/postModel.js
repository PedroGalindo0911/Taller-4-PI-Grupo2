const sequelize = require('../configs/mysqlConnection');

exports.getPostsQuery = async () => {
  'CALL GetAllPublish();';
  const [results, metadata] = await sequelize.query('CALL GetAllPublish();', {
    type: sequelize.QueryTypes.SELECT,
  });

  return results;
};

exports.createPostQuery = async (title, content, course, teacher, userId) => {
  const [results, metadata] = await sequelize.query(
    'CALL CreatePublish(:title, :content, :course, :teacher, :userId);',
    {
      replacements: {
        title,
        content,
        course,
        teacher,
        userId,
      },
    },
  );

  return results;
};
