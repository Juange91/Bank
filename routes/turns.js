// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la funcion router de express
const router = express.Router();
// Se importan las constantes del controlador 
const {getTurns, addTurn, caseTurn, viewTurns, editTurn, viewAllTurns, turnsByAgent}  = require('../controllers/turns');
// Peticion get se obtienen los turnos segun el caso del turno, se obtiene el id del caso como parametro
router.get('/turn/:id',caseTurn);
// Peticion get para obtener los turnos por id de agente, se recibe id como parametro
router.get('/turnByAgent/:id',turnsByAgent);
// Peticion get para ver todos los turnos, no se reciben parametros
router.get('/viewAllTurns', viewAllTurns);
// Peticion get para obtener los turnos por id de usuario y estado activo, se recibe id del usuario como parametro
router.get('/:id',getTurns);
// Peticion post se agregan los datos del nuevo turno para la base de datos, se obtine los datos por el body
router.post('/', addTurn);
// Peticion get se obtinen datos de 3 tablas como son turnos,agents y users para ver sus datos
// Se obtine el id del agente como parametro 
router.get('/viewTurn/:id',viewTurns );
// Peticion put para modificar el estado del turno segun id del turno, se obtiene el id del turno como parametro
router.put('/finishTurn/:id/',editTurn);

// Se exporta la constante router.
module.exports = router