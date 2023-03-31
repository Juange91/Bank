// Se importa para los tipos de datos para los campos de la tabla users
const  DataTypes = require('sequelize');
// Se realiza el llamado del la conexión a la base de datos
const sequelize = require("../dataBase/mysql");
// Se definen los campos de la tabla users con sus tipos de datos
const UserSchema = sequelize.define(
    'users', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name_user: {
        type: DataTypes.STRING
    },
    last_name_user: {
        type: DataTypes.STRING
    },
    phone_user: {
        type: DataTypes.INTEGER
    },
    type_document: {
        type: DataTypes.STRING
    },

},
    {
        timestamps: true
    }
);
// Se exporta el esquema de la tabla users con sus campos
module.exports = { UserSchema }




