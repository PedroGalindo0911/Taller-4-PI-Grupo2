const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Puerto 
const PORT = process.env.PORT || 3000;

// Middleware básico (opcional)
app.use(express.json());
app.use('/api', require('./routes/userRoutes'));

// escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});