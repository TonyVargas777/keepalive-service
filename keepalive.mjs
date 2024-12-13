import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 10000; // Render asignará automáticamente un puerto

app.get('/', (req, res) => {
    res.send('Keepalive service is running');
});

// Función para enviar solicitudes periódicas
const keepAlive = async () => {
    try {
        console.log('Enviando solicitud a https://basedatosrender.onrender.com...');
        const response = await fetch('https://basedatosrender.onrender.com');
        console.log('Solicitud exitosa', await response.text());
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
};

// Llamar a la función cada 5 minutos
setInterval(keepAlive, 5 * 60 * 1000);

// Iniciar el servidor para satisfacer Render
app.listen(PORT, () => {
    console.log(`Keepalive service started on port ${PORT}`);
});
