// Se exporta el esquema de turnos
const { SupervisorSchema } = require('../models/supervisor');
// Se realiza el llamado del la conexión a la base de datos
const sequelize = require("../dataBase/mysql");

const getSupervisores = (req, res) => {
    const data = req.params
 console.log(data);
 SupervisorSchema.findOne({

        where:{
            user_supervisor: data.user,
            password_supervisor: data.pass
        }
    })
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log('Error ' + error);
    })
}

module.exports = {getSupervisores}