
// Importación del módulo "mysql"
const mysql = require("mysql");

// Exportación de un objeto que representa una conexión a la base de datos a través de un pool
module.exports = mysql.createPool({
  // Propiedades del objeto que configuran la conexión a la base de datos
  host: process.env.DB_HOST,         // Host de la base de datos (generalmente una dirección IP o "localhost")
  user: process.env.DB_USER,         // Nombre de usuario para la conexión a la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario para la conexión a la base de datos
  database: process.env.DB_NAME,     // Nombre de la base de datos que se va a usar
});
