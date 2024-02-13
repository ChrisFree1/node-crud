const express = require('express')
const routes = express.Router()
const ProductosService = require('../services/productService')
const ProductosController = require('../controllers/productController')


const productsRoute = () =>{

    const productosController = new ProductosController ( new ProductosService())
    
    routes.get('/list-product', productosController.getProductos);
    routes.post('/creat-products', productosController.createProducts)

    return routes;
}

module.exports = productsRoute