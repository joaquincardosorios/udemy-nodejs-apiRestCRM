const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

// CORS permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors')

// conectar mongo
require('./config/db')
// Crear servidor
const app = express()

// Habilitar body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Habilitar CORS
app.use(cors())

// Rutas de la app
app.use('/', routes())

// carpeta publica
app.use(express.static('uploads'))


// puerto
app.listen(5000)