const express = require('express')
const clientesController = require('../controllers/clientesController')
const productosController = require('../controllers/productosController')
const pedidosController = require('../controllers/pedidosController')
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
     router.put('/productos/:idProducto', 
        productosController.subirArchivo,
        productosController.actualizarProducto
    )
 
     //Eliminar producto
     router.delete('/productos/:idProducto', productosController.eliminarProducto)


     /** PEDIDOS **/
     router.post('/pedidos', pedidosController.nuevoPedido)
     router.get('/pedidos',pedidosController.mostrarPedidos)
     router.get('/pedidos/:idPedido',pedidosController.mostrarPedido)
     router.put('/pedidos/:idPedido', pedidosController.actualizarPedido)
     router.delete('/pedido/:idPedido', pedidosController.eliminarPedido)

    return router
}