// Importa json-server
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();

// Ruta al archivo db.json
const router = jsonServer.router(path.join(__dirname, 'src', 'database', 'db.json')); 

// Usa middlewares por defecto (como CORS y logger)
const middlewares = jsonServer.defaults();

// Usa las rutas de API sin prefijo '/api'
server.use(middlewares);
server.use(router);

// Escucha en el puerto 5000
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});

