import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root' // Indicar que el servicio es proporcionado en el nivel raíz
})
export class CarritoService {
  constructor(private http: HttpService) {
    // Constructor del servicio, inyecta el servicio HttpService
  }

  public async quitarProducto(idProducto: number) {
    // Método para quitar un producto del carrito
    return await this.http.post('/carrito/eliminar', {
      id: idProducto,
    });
  }

  public async agregarAlCarrito(idProducto: number) {
    // Método para agregar un producto al carrito
    return await this.http.post('/carrito/agregar', {
      id: idProducto,
    });
  }

  public async existeEnCarrito(idProducto: number) {
    // Método para verificar si un producto existe en el carrito
    return await this.http.post('/carrito/existe', {
      id: idProducto,
    });
  }

  async obtenerProductos() {
    // Método para obtener la lista de productos en el carrito
    return await this.http.get('/carrito');
  }

  async terminarCompra(datosCliente) {
    // Método para terminar la compra y realizar el proceso de compra
    return await this.http.post('/compra', datosCliente);
  }
}
