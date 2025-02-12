import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.send('Keepalive service is running');
});

// Lista de URLs de las bases de datos o servicios que deseas mantener activos
const urls = [
    'https://basedatosrender.onrender.com',
    'https://los-juegos-de-mi-vida.onrender.com'
];

// Función para enviar solicitudes periódicas a todas las URLs
const keepAlive = async () => {
    for (const url of urls) {
        try {
            console.log(`Enviando solicitud a ${url}...`);
            const response = await fetch(url);
            console.log(`Solicitud exitosa a ${url}:`, await response.text());
        } catch (error) {
            console.error(`Error al enviar la solicitud a ${url}:`, error);
        }
    }
};

// Llamar a la función cada 5 minutos
setInterval(keepAlive, 5 * 60 * 1000);

app.listen(PORT, () => {
    console.log(`Keepalive service started on port ${PORT}`);
});
