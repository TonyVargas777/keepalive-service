import fetch from "node-fetch"; // Importa fetch directamente
import http from 'http'; // Importa http

const PORT = process.env.PORT || 3900; // Elige el puerto que quieras usar

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Backend is active');
});

server.listen(PORT, () => {
  console.log(`Keepalive service is running on port ${PORT}`);
});

const url = "https://basedatosrender.onrender.com"; // Reemplaza con la URL de tu backend

const keepAlive = () => {
  console.log(`Enviando solicitud a ${url} para mantener el backend activo...`);
  fetch(url)
    .then(() => console.log("Solicitud exitosa"))
    .catch((err) => console.error("Error al enviar la solicitud:", err));
};

// Ejecutar el keepAlive cada 10 minutos
setInterval(keepAlive, 10 * 60 * 1000);

// Llamar al menos una vez al iniciar
keepAlive();
