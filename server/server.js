const express = require('express');
const app = express();

// Puerto 
const PORT = process.env.PORT || 3000;

// Middleware básico (opcional)
app.use(express.json());

// escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});