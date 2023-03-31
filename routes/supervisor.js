// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la funcion router de express
const router = express.Router();
// Se importan las constantes del controlador 
const { getSupervisores }  = require('../controllers/supervisor');
// Peticion get se obtienen los turnos segun el caso del turno, se obtiene el id del caso como parametro
router.get('/:user/:pass',getSupervisores);

// Se exporta la constante router.
module.exports = router