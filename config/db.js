const Sequelize = require('sequelize')

const db = new Sequelize('prueba','postgres', 'System@123',{
  host:'localhost',
  dialect:'postgres'
})

module.exports=db;