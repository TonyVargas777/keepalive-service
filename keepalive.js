import fetch from "node-fetch";

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
