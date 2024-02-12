const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Products = db.define('Products', {

    name:{
        type : DataTypes.STRING,
        allowNull :false,
    },
    price:{
        type : DataTypes.FLOAT,
        allowNull : false,
    },

    description:{
        type: DataTypes.STRING,
        allowNull : false,
        
    }
})


module.exports = Products;

