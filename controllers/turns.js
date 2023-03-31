// Se exporta el esquema de turnos
const { TurnsSchema } = require('../models/turns');
// Se realiza el llamado del la conexión a la base de datos
const sequelize = require("../dataBase/mysql");
// Se hace una petición de tipo get para ver todos los turnos por cada agente
const turnsByAgent = (req,res)  => {
const data = req.params
    TurnsSchema.findAll({
where : {
    id_agent_fk:data.id,
    status_turn: 'Activo'
}
    })
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log('Error ' + error);
    })
}
// Se hace una consulta de tipo get para obtener datos de la tabla turnos con el id del caso
const caseTurn = (req, res) => {
    const data = req.params
    TurnsSchema.findAll({
        where: {
            case_turn: data.id
        }
    })
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log('Error ' + error);
        })
};
// Se hace una peticion de tipo get para obtener los datos de la tabla turnos con el id del usuario
//  y si su estado esta en 'Activo'
const getTurns = (req, res) => {
    const idUser = req.params
    TurnsSchema.findAll({
        where: {
            id_user_fk: idUser.id,
            status_turn: 'Activo'
        }
    })
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log('Error ' + error);
    })

};
// Se realiza una peticion de post donde se agrega un nuevo turno a la base de datos
const addTurn = (req, res) => {
    const data = req.body
    TurnsSchema.create({
        name_turn: data.name_turn,
        status_turn: data.status_turn,
        module_turn: data.module_turn,
        case_turn: data.case_turn,
        id_user_fk: data.id_user_fk,
        id_agent_fk: data.id_agent_fk
    })
        .then(result => {
            res.json({ status: 'Turn registered' });
        })
        .catch(error => {
            console.log('Error ' + error);
        })
};
// Se realiza una consulta tipo inner join para mostrar datos de las otras tablas
const viewTurns = async (req, res) => {
    const data = req.params
    const [result, metadata] = await sequelize.query(

        `SELECT id_turn, name_turn, name_user,last_name_user,status_turn FROM turns JOIN users ON turns.id_user_fk = users.id_user
         WHERE id_agent_fk = ${data.id} && status_turn = 'Activo'`
    );
    if (result) {
        res.json(result);
    }
};
// Se hace una petición de tipo put donde se modifica el estado de la tabla turnos.
const editTurn = (req, res) => {
    const data = req.params
    const status = req.body
    TurnsSchema.update({ status_turn: status.status_turn }, {
        where: {
            id_turn: data.id
        }
    })
        .then(result => {
            res.json({ status: 'Turn edited' });
        })
        .catch(error => {
            console.log('Error ' + error);
        })
};
// Se hece una consulta de tipo get donde se muestran todos los datos de la tabla turnos
const viewAllTurns = async (req, res) => {
    const [result, metadata] = await sequelize.query(

        `SELECT * FROM turns INNER JOIN users ON turns.id_user_fk = users.id_user
         INNER JOIN agents ON turns.id_agent_fk = agents.id_agent
         WHERE status_turn = 'Activo'`
    );
    if (result) {
        res.json(result);
    }

}
// Se exportan las constantes
module.exports = { getTurns, addTurn, caseTurn, viewTurns, editTurn, viewAllTurns, turnsByAgent} 