const sequelize = require('../configs/mysqlConnection');

exports.infoUsuarioQuery = async (carnet) => {
    const [results, metadata] = await sequelize.query(
        "CALL GetKeyUser(:carnet);",
        {
            replacements: { carnet: carnet },
            type: sequelize.QueryTypes.SELECT
        }
    );

    return results;
};

exports.aprobadosQuery = async (carnet) => {
    const [results, metadata] = await sequelize.query(
        "CALL GetKeyAprobe(:carnet)",
        {
            replacements: { carnet: carnet },
            type: sequelize.QueryTypes.SELECT
        }
    );
    
    return results;
}
