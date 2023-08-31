// Importar el módulo de conexión desde el archivo "conexion.js"
const conexion = require("./conexion");

// Exportar un objeto que contiene un método para insertar datos en la tabla
module.exports = {
  // Método para insertar datos de venta y producto en la tabla "productos_vendidos"
  insertar(idVenta, idProducto) {
    return new Promise((resolve, reject) => {
      // Realizar una consulta de inserción en la base de datos
      conexion.query(
        `INSERT INTO productos_vendidos
          (id_venta, id_producto)
          VALUES
          (?, ?)`,
        [idVenta, idProducto],
        (err, resultados) => {
          if (err) {
            reject(err); // Rechazar la promesa en caso de error
          } else {
            resolve(resultados.insertId); // Resolver la promesa con el ID insertado
          }
        }
      );
    });
  },
};
