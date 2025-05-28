const express = require('express');
const cors = require('cors')
const app = express();

// middlewares
app.use(cors()) // ⚠️ Esto debe ir primero (antes que las rutas)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

// Escuchar puerto
app.listen(5401, () => {
    console.log('Server on port 5401');
});