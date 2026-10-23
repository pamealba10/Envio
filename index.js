const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Necesario para recibir JSON desde fetch
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint que recibe los datos
app.post('/enviar', (req, res) => {
  const { nombre, email } = req.body;
  console.log('Datos recibidos:', req.body);
  
  // Respondemos con un JSON para que el front-end lo lea fácilmente
  res.json({ 
    mensaje: `¡Gracias ${nombre}! Hemos recibido tu correo: ${email}` 
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});