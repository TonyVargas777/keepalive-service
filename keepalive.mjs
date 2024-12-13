import fetch from 'node-fetch'; // Importa usando ES modules

const PORT = process.env.PORT || 3900;
console.log(`Keepalive service started on port ${PORT}`);

// URL de tu backend
const url = "https://basedatosrender.onrender.com";

// Mantén el backend activo
const keepAlive = async () => {
  console.log(`Enviando solicitud a ${url}...`);
  try {
    await fetch(url);
    console.log("Solicitud exitosa");
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

// Ejecutar el keepAlive cada 10 minutos
setInterval(keepAlive, 10 * 60 * 1000);

// Llama al menos una vez al iniciar
keepAlive();
