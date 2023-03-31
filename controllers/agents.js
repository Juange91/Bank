// Se hace uso de esquema de agents 
const {agentSchema}  = require('../models/agents');
// Se crea una constante la cual recibe una peticion de tipo get donde enviara todos los datos 
// de la tabla agents si el estado del agente es 'Activo'.
const viewAllAgents = (req, res) => {    
agentSchema.findAll({
    where:{
        status_agent: 'Activo'
    }
})
.then(result => {
    res.json(result);
})
.catch(error => {
    console.log('Error ' + error);
})
}
// Se crea una constante la cual recibe una peticion de tipo get donde enviara todos los datos 
// de la tabla agents segun el caso del agente y si el estado del agente es 'Activo'.
const statusAndCaseAgents = (req, res) => {
    const data = req.params
    agentSchema.findAll({
        where: {
            case_agent: data.id,
            status_agent: 'Activo'
        }
    })
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log('Error ' + error);
        })
};
// Se crea una constante la cual recibe una peticion de tipo get donde se enviara los datos 
// de la tabla agents si el agente tiene un usuario y una contraseña registrada para el inicio de sesión.
const loginAgent = (req, res)  => {
    const data = req.params
    agentSchema.findAll({
        where: {
            user_agent:data.user,
            password:data.pass
          }
    })
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log('Error ' + error);
    })
};
// Se crea una constante la cual recibe una peticion de tipo get donde enviara solos los datos 
// de la tabla si el agente tiene un usuario registrado.
const viewOneAgent = (req, res)  => {
    const data = req.params
    agentSchema.findAll({
        where: {
            user_agent:data.user
          }
    })
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log('Error ' + error);
    })
};
// Se crea una constante la cual recibe una peticion de tipo put donde se modificara el estado del agent
const statusAgent= (req, res) => {
const data = req.params
const status = req.body
agentSchema.update({
    status_agent: status.status_agent
},{
    where:{
       id_agent: data.id 
    }
})
}
// Se exportan cada uno de las constantes.
module.exports = { statusAndCaseAgents,loginAgent, viewOneAgent, statusAgent, viewAllAgents } 