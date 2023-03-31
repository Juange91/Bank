// Se hace uso de la libreria de Sequlize
const Sequelize = require('sequelize');
// Se hace uso de la base de datos bank en modo local
const sequelize = new Sequelize('bot_prueba', 'bot_user', 'Juan12345', {
    host: 'db4free.net',
    dialect: 'mysql'
});
// Se autentifica la cnexion a la base de datos 
sequelize.authenticate()
.then(() => {
    console.log('Database connected');
})
.catch(error => {
    console.log('connection error'+ error);
})
// Se exporta la constante sequalize
module.exports = sequelize

