const express = require('express')
const routes = require('./routes')


// Crear servidor
const app = express()

// Rutas de la app
app.use('/', routes())


// puerto
app.listen(5000)