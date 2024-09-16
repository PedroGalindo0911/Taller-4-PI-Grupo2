const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: "mysql",
        logging: false
    }
);

sequelize.authenticate()
    .then(() => {
        console.log(`Se conectó exitosamente a la base de datos ${process.env.DATABASE_NAME} en ${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`);
    })
    .catch((error) => {
        console.log("ERROR: ¡No se ha podido conectar a la base de datos!\n\n", error);
    });

module.exports = sequelize;
