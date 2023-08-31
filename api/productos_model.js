// Importar el módulo de conexión desde el archivo "conexion.js"
const conexion = require("./conexion");

// Importar los módulos para manejo de archivos y rutas
const fs = require("fs");
const path = require("path");

// Exportar un objeto que contiene varios métodos para operaciones relacionadas con productos y fotos
module.exports = {
  // Método para insertar un nuevo producto en la tabla "productos"
  insertar(nombre, descripcion, precio) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `INSERT INTO productos
          (nombre, descripcion, precio)
          VALUES
          (?, ?, ?)`,
        [nombre, descripcion, precio],
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
  
  // Método para agregar una foto a un producto en la tabla "fotos_productos"
  agregarFoto(idProducto, nombreFoto) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `INSERT INTO fotos_productos
          (id_producto, foto)
          VALUES
          (?, ?)`,
        [idProducto, nombreFoto],
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
  
  // Método para obtener todos los productos de la tabla "productos"
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT id, nombre, descripcion, precio FROM productos`,
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
  
  // Método para obtener productos con sus fotos asociadas
  obtenerConFotos() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT * FROM productos`,
        async (err, resultados) => {
          if (err) {
            reject(err); // Rechazar la promesa en caso de error
          } else {
            for (let x = 0; x < resultados.length; x++) {
              resultados[x].foto = await this.obtenerPrimeraFoto(resultados[x].id);
            }
            resolve(resultados); // Resolver la promesa con los resultados y fotos
          }
        }
      );
    });
  },
  
  // Método para obtener la primera foto de un producto
  obtenerPrimeraFoto(idProducto) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT foto FROM fotos_productos WHERE id_producto = ? LIMIT 1`,
        [idProducto],
        (err, resultados) => {
          if (err) {
            reject(err); // Rechazar la promesa en caso de error
          } else {
            resolve(resultados[0].foto); // Resolver la promesa con la foto
          }
        }
      );
    });
  },
  
  // ... (otros métodos para operaciones con la base de datos)
  
  // Método para eliminar un producto de la tabla "productos" y sus fotos asociadas
  eliminar(id) {
    return new Promise(async (resolve, reject) => {
      const fotos = await this.obtenerFotos(id);
      for (let m = 0; m < fotos.length; m++) {
        await fs.unlinkSync(path.join(__dirname, "fotos_productos", fotos[m].foto));
      }
      conexion.query(
        `DELETE FROM productos
          WHERE id = ?`,
        [id],
        (err) => {
          if (err) {
            reject(err); // Rechazar la promesa en caso de error
          } else {
            resolve(); // Resolver la promesa en caso de éxito
          }
        }
      );
    });
  },
};
