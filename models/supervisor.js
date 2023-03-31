// Se importa para los tipos de datos para los campos de la tabla turns
const DataTypes = require('sequelize');
// Se realiza el llamado del la conexión a la base de datos
const sequelize = require("../dataBase/mysql");
// Se definen los campos de la tabla turns con sus tipos de datos
const SupervisorSchema = sequelize.define(
    'supervisors', {
    id_supervisor: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true
    },
    name_supervisor: {
        type: DataTypes.STRING
    },
    last_name_supervisor: {
        type: DataTypes.STRING
    },
    phone_supervisor: {
        type: DataTypes.INTEGER
    },
    user_supervisor: {
        type: DataTypes.INTEGER
    },
    password_supervisor: {
        type: DataTypes.INTEGER
    },
},
{
    timestamps: true
}
);
// Se exporta el esquema de la tabla agents con sus campos
module.exports = { SupervisorSchema } 