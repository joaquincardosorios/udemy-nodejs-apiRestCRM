const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

// conectar mongo
require('./config/db')
// Crear servidor
const app = express()

// Habilitar body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Rutas de la app
app.use('/', routes())


// puerto
app.listen(5000)