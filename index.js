// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let comentarios = [];

app.post('/api/comentarios', (req, res) => {
    const { nombre, comentario } = req.body;
    comentarios.push({ nombre, comentario });
    res.status(201).json({ message: 'Comentario agregado' });
});

app.get('/api/comentarios', (req, res) => {
    res.json(comentarios);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
