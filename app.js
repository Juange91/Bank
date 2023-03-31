// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la libreria de cors
const cors = require('cors');
// Se crea la contante app y hace uso de express
const app = express();
// app hace uso de .json de express
app.use(express.json());
// app hace uso de cors
app.use(cors());
// app hace uso de la ruta turnos 
app.use('/api/turns',require('./routes/turns'));
// app hace uso de la ruta usuarios 
app.use('/api/users',require('./routes/users'));
// app hace uso de la ruta agentes 
app.use('/api/agents',require('./routes/agents'));
// app hace uso de la ruta supervisor 
app.use('/api/supervisor',require('./routes/supervisor'));

// app pone a escuchar al servidor el el puerto en este caso es el 3000.
app.listen(3000,(err) => {
if (err) {
    console.log('Server error');
}else{
    console.log('Server connected');
}
})




