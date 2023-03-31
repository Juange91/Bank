// Se importa para los tipos de datos para los campos de la tabla turns
const DataTypes = require('sequelize');
// Se realiza el llamado del la conexión a la base de datos
const sequelize = require("../dataBase/mysql");
// Se definen los campos de la tabla turns con sus tipos de datos
const TurnsSchema = sequelize.define(
    'turns', {
    id_turn: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_turn: {
        type: DataTypes.STRING
    },
    status_turn: {
        type: DataTypes.STRING
    },
    module_turn: {
        type: DataTypes.INTEGER
    },
    case_turn: {
        type: DataTypes.INTEGER
    },
    id_user_fk: {
        type: DataTypes.INTEGER
    },
    id_agent_fk: {
        type: DataTypes.INTEGER
    }
},
{
    timestamps: true
}
);
// Se exporta el esquema de la tabla agents con sus campos
module.exports = { TurnsSchema } 