// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la funcion router de express
const router = express.Router();
// Se importan las constantes del controlador 
const {statusAndCaseAgents,loginAgent, viewOneAgent, statusAgent, viewAllAgents}= require('../controllers/agents');
// Peticion get para ver todos los agentes no se reciben parametros.
router.get('/viewAllAgents', viewAllAgents);
// Peticion get para ver agente por id y estado, se recibe un id como parametro 
router.get('/:id',statusAndCaseAgents);
// Peticion get para el inicio de sesion del agente, se recibe usuario y contraseña como parametros
router.get('/login/:user/:pass', loginAgent);
// Peticion get para ver agente por usuario solamente, se recibe el usuario como parametro
router.get('/viewAgent/:user', viewOneAgent);
// Peticio put para modificar el estado del turno segun id, se recibe el id como parametro y el estado en un body
router.put('/status/:id', statusAgent);

// Se exporta la constante router.
module.exports = router