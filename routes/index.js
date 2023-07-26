const express = require('express')
const clientesController = require('../controllers/clientesController')
const router = express.Router()

module.exports = function() {
    
    // Agregar nuevos clientes via POST
    router.post('/clientes', clientesController.nuevoCliente)

    // OBtener todos los clientes
    router.get('/clientes', clientesController.mostrarClientes)

    //Obtener un cliente
    router.get('/clientes/:idCliente', clientesController.mostrarCliente)

    //Actualizar cliente
    router.put('/clientes/:idCliente', clientesController.actualizarCliente)

    //Eliminar cliente
    router.delete('/clientes/:idCliente', clientesController.eliminarCliente)

    return router
}