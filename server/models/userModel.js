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

exports.infoUsuariosQuery = async () => {
    const [results, metadata] = await sequelize.query(
        "CALL GetAllUsers();",
        {
            type: sequelize.QueryTypes.SELECT
        }
    );

    return results;
}

exports.crearUsuarioQuery = async (carnet, nombres, apellidos, correo, contrasena) => {
    const query = await sequelize.query(
        "CALL CreateUser(:carnet,:nombres,:apellidos,:contrasena,:correo);",
        {
            replacements: { 
                carnet: carnet,
                nombres: nombres,
                apellidos: apellidos,
                contrasena: contrasena,
                correo: correo,
             }
        }
    );

    const results = await sequelize.query(
        "CALL GetKeyUser(:carnet);",
        {
            replacements: { carnet: carnet },
            type: sequelize.QueryTypes.SELECT
        }
    );

    return results;
}

exports.updatePasswordQuery = async (correo, carnet, contrasena) => {
    const results = await sequelize.query('UPDATE usuario SET contrasena = :contrasena WHERE carnet = :carnet AND correo = :correo', {
        replacements: { correo: correo, carnet: carnet, contrasena: contrasena }
    });

    return results;
}
