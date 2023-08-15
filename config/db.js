const mongoose = require('mongoose')
require('dotenv').config({path:'variables.env'})

mongoose.connect(process.env.DB, {useNewUrlParser:true})
console.log('Base de datos conectada exitosamente')

mongoose.connection.on('error', (error) => {
    console.log(error)
})