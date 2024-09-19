const sequelize = require('../configs/mysqlConnection');

exports.getAllCursosQuery = async () => {
  const [results, metadata] = await sequelize.query('CALL GetAllCourse();', {
    type: sequelize.QueryTypes.SELECT,
  });

  return results;
};

exports.getCursosByIdQuery = async (id) => {
  const [results, metadata] = await sequelize.query('CALL GetKeyCourse(:id);', {
    replacements: { id },
  });

  return results;
};

exports.getCursoByName = async(nombre) => {
  try {
    // Execute the stored procedure with parameter binding
    const [results, metadata] = await sequelize.query(
      'CALL GetCursoByName(:nombre);',
      {
        replacements: { nombre },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    // Check if results are empty before returning
    if (results.length === 0) {
      return null; // Or an appropriate empty response (e.g., {})
    }

    return results;
  } catch (error) {
    console.error('Error fetching curso:', error);
    // Handle the error appropriately (e.g., throw an exception, log and return null)
    return null; // Or an appropriate error response
  }
};

