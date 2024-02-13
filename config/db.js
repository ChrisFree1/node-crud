const { Pool } = require('pg')
const { getEnv } = require('../environment/env')


//Constantes de mis despliegles

const db_enviroment = {

  development: {
    user: 'postgres',
    host: 'localhost',
    database: 'libreria_istg',
    password: 'System@123',
    port: 5432,
    max: 60,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  },

  production: {
    user: 'postgres',
    host: 'localhost',
    database: 'prueba',
    password: 'System@123',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  }
}


const pool = new Pool(db_enviroment[getEnv()]);

module.exports.getDbClient = async function () {
  if (pool.idleCount >= 30 || pool.totalCount >= 2) {
    console.log('Total clients at pool: ' + pool.totalCount)
    console.log(pool.idleCount)
    console.log(pool.waitingCount)
    console.log('Muchos clientes en espera')
  }
  return await pool.connect()
}

