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

exports.filtrarPostsPorCatedraticoQuery = async (catedratico) => {
  const [results, metadata] = await sequelize.query(
    'CALL FilterPostsByTeacherName(:catedratico);',
    {
      replacements: { catedratico },
      type: sequelize.QueryTypes.SELECT,
    },
  );

  return results;
};

exports.filtrarPostsPorCursoQuery = async (curso) => {
  const [results, metadata] = await sequelize.query(
    'CALL FilterPostsByCourseName(:curso);',
    {
      replacements: { curso },
      type: sequelize.QueryTypes.SELECT,
    },
  );

  return results;
};
