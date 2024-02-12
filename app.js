const express = require('express')
const app =  express()
const db = require('./config/db')
const productsRoutes = require('./routes/productsRoutes')
const PORT = 8000
const cors = require('cors')

db.sync({alter : true}) // crear o actualizar las tablas si existe modificacion en alguna las realiza
    .then( () => {
        console.log('Conected to database')
    })
    .catch( (error ) => 
        console.error('Error in the database ', error)
    )

app.use(cors()) //Permitir que se pueda hacer peticiones HTTP
app.use(express.json()) // req.body poder leerlos convertiendolos a objetos


//Crear mis rutas
app.use('/api',productsRoutes)


//Iniciar el servidor   

app.listen(PORT, () => {
    console.log(`Server in the por http://localhost:${PORT}`);  
})