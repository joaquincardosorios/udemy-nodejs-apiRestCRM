const express = require('express')
const clientesController = require('../controllers/clientesController')
const productosController = require('../controllers/productosController')
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

    /** PRODUCTOS **/

     // Agregar nuevos productos via POST
     router.post('/productos', 
        productosController.subirArchivo,
        productosController.nuevoProducto
    )

     // OBtener todos los productos
     router.get('/productos', productosController.mostrarProductos)
 
     //Obtener un producto
     router.get('/productos/:idProducto', productosController.mostrarProducto)
 
     //Actualizar producto
     router.put('/productos/:idProducto', productosController.actualizarProducto)
 
     //Eliminar producto
     router.delete('/productos/:idProducto', productosController.eliminarProducto)

    return router
}