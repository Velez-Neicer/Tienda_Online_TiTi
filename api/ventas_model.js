// Importar el módulo de conexión desde el archivo "conexion.js"
const conexion = require("./conexion");

// Exportar un objeto que contiene varios métodos para operaciones relacionadas con ventas
module.exports = {
  // Método para obtener productos vendidos de una venta específica
  obtenerProductosVendidos(idVenta) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT productos.* FROM productos_vendidos 
          INNER JOIN productos ON productos.id = productos_vendidos.id_producto 
          WHERE productos_vendidos.id_venta = ?;`,
        [idVenta],
        (err, resultados) => {
          if (err) {
            reject(err); // Rechazar la promesa en caso de error
          } else {
            resolve(resultados); // Resolver la promesa con los resultados
          }
        }
      );
    });
  },
  
  // Método para obtener información de una venta por su ID
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT ventas.total, clientes.nombre, clientes.direccion 
          FROM ventas 
          INNER JOIN clientes ON ventas.id_cliente = clientes.id 
          WHERE ventas.id = ?`,
        [id],
        (err, resultados) => {
          if (err) {
            reject(err); // Rechazar la promesa en caso de error
          } else {
            resolve(resultados[0]); // Resolver la promesa con el primer resultado
          }
        }
      );
    });
  },
  
  // Método para obtener información de todas las ventas
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT ventas.id, ventas.total, clientes.nombre, clientes.direccion 
          FROM ventas 
          INNER JOIN clientes ON ventas.id_cliente = clientes.id;`,
        (err, resultados) => {
          if (err) {
            reject(err); // Rechazar la promesa en caso de error
          } else {
            resolve(resultados); // Resolver la promesa con los resultados
          }
        }
      );
    });
  },
  
  // Método para insertar una nueva venta en la tabla "ventas"
  insertar(idCliente, total) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `INSERT INTO ventas
          (id_cliente, total)
          VALUES
          (?, ?)`,
        [idCliente, total],
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
