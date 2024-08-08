import express from 'express';
import cors from 'cors';
import profesionalesRoutes from './routes/profesionales.routes.js'

const app = express();

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());

// Middleware para permitir CORS
app.use(cors());

app.use(profesionalesRoutes)

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT 

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
