const sequelize = require('../configs/mysqlConnection');

exports.getPostsQuery = async () => {
  'CALL GetAllPublish();';
  const [results, metadata] = await sequelize.query('CALL GetAllPublish();', {
    type: sequelize.QueryTypes.SELECT,
  });

  return results;
};

exports.createPostQuery = async (title, content, course, teacher, userId) => {
  const results = await sequelize.query(
    'CALL CreatePublish(:title, :content, :userId, :course, :teacher);',
    {
      replacements: {
        title: title,
        content: content,
        course: course,
        teacher: teacher,
        userId: userId,
      },
    },
  );

  return results;
};
