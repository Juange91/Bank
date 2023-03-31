// Se hace uso del esquema de users.
const { UserSchema } = require('../models/users');
// Se crea una constante la cual recibe una peticion de tipo get donde enviara los datos del usuario 
// de la tabla agents segun el documento y tipo de documento.
const getUsers = (req, res) => {
    const data = req.params
    console.log(data);
    UserSchema.findAll({
        where: { id_user:data.document,
            type_document:data.typeDocument
         }
    })
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log('Error ' + error);
        })
};
// Se crea una constante la cual recibe una peticion de tipo post donde se guardaran los datos de usuario 
// de la tabla agents segun el caso del agente y si el estado del agente es 'Activo'.
const addUser = (req, res) => {
    const data = req.body
    UserSchema.create({
        id_user:data.id_user,
        name_user:data.name_user,
        last_name_user:data.last_name_user,
        phone_user:data.phone_user,
        type_document:data.type_document
    })
    .then(result => {
        res.json({status:'User registered'});
    })
    .catch(error => {
        console.log('Error ' + error);
    })
}
// Se exportan las constantes
module.exports = { getUsers, addUser}