const express = require('express');
const app = express();
const db = require('./config/db');
const productsRoute = require('./routes/productsRoutes');
const PORT = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Crear mis rutas
app.use('/api', productsRoute()); // Invocar la función para obtener las rutas

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
