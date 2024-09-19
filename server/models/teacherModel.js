const sequelize = require('../configs/mysqlConnection');

exports.getAllTeachersQuery = async () => {
  const [results, metadata] = await sequelize.query(
    'CALL GetAllCatedraticos();',
    {
      type: sequelize.QueryTypes.SELECT,
    },
  );

  return results;
};

exports.getCatedraticoByNameQuery = async (nombre) => {
  try {
    // Execute the stored procedure with parameter binding
    const [results, metadata] = await sequelize.query(
      'CALL GetCatedraticoByName(:nombre);',
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
    console.error('Error fetching catedratico:', error);
    // Handle the error appropriately (e.g., throw an exception, log and return null)
    return null; // Or an appropriate error response
  }
};

exports.getCatedraticoByIdQuery = async (id) => {
  const [results, metadata] = await sequelize.query(
    'CALL GetKeyCatedratico(:id);',
    {
      replacements: { id },
    },
  );

  return results;
};
