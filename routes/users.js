// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la funcion router de express
const router = express.Router();
// Se importan las constantes del controlador 
const {getUsers, addUser} = require('../controllers/users');
// Peticion get se obtiene un usuario con su id y su tipo de documento, se obtienen como parametros el id del usuario
// y el tipo de documento
router.get('/:document/:typeDocument',getUsers);
// Peticion post se agrega un usuario nuevo a la base de datos, se obtiene un body con los datos del usuario
router.post('/', addUser);

// Se exporta la constante router
module.exports = router