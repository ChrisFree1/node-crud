const express = require('express')
const routes = express.Router()
const productsController = require('../controllers/productController')

//Listar productos
routes.get('/list-products',productsController.getProductos);

//Listar Productos por Id
routes.get('/list-product/:id',productsController.getProductosId);  

//Crear productos
routes.post('/creat-products',productsController.createProducts);

//Actualizar producto
routes.put('/update-product/:id',productsController.updateProducts);

//Eliminar Producto
routes.delete('/delete-product/:id', productsController.delectProduct);

module.exports=routes;