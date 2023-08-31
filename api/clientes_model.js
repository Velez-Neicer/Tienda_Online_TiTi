// Importación de un módulo "conexion" desde el archivo "conexion.js"
const conexion = require("./conexion");

// Exportación de un objeto con un método llamado "insertar"
module.exports = {
  insertar(nombre, direccion) {
    // Se retorna una nueva promesa que realiza una operación de inserción en la base de datos
    return new Promise((resolve, reject) => {
      // Se utiliza el método "query" del módulo "conexion" para realizar la inserción
      conexion.query(
        `insert into clientes
            (nombre,direccion)
            values
            (?, ?)`,
        [nombre, direccion],
        (err, resultados) => {
          // En caso de error, se rechaza la promesa con el error
          if (err) reject(err);
          // En caso de éxito, se resuelve la promesa con el ID del elemento insertado
          else resolve(resultados.insertId);
        }
      );
    });
  },
};

