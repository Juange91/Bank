// Se importa para los tipos de datos para los campos de la tabla agents
const DataTypes = require('sequelize');
// Se realiza el llamado del la conexión a la base de datos
const sequelize = require("../dataBase/mysql");
// Se definen los campos de la tabla agents con sus tipos de datos
const agentSchema = sequelize.define(
    'agents', {
        id_agent:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name_agent:{
            type: DataTypes.STRING
        },
        last_name_agent:{
            type: DataTypes.STRING
        },
        user_agent:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        status_agent:{
            type: DataTypes.STRING
        },
        module_agent:{
            type: DataTypes.INTEGER
        },
        case_agent:{
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: true
    }
);
// Se exporta el esquema de la tabla agents con sus campos
module.exports = {agentSchema}