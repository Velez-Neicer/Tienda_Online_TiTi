import { Injectable } from '@angular/core';
import { Producto } from "./producto";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpService) {
    // Inyecta una instancia de HttpService en el constructor del servicio
  }

  public async eliminarProducto(idProducto) {
    // Llama al método 'delete' del servicio HttpService para eliminar un producto por su ID
    return await this.http.delete("/producto?id=".concat(idProducto));
  }

  public async agregarProducto(producto: Producto) {
    // Llama al método 'post' del servicio HttpService para agregar un nuevo producto
    return await this.http.post("/producto", producto);
  }

  public async agregarFotosDeProducto(fotos: FormData) {
    // Llama al método 'formdata' del servicio HttpService para agregar fotos de un producto
    return await this.http.formdata("/fotos_producto", fotos);
  }

  public async obtenerProductos() {
    // Llama al método 'get' del servicio HttpService para obtener la lista de productos
    return await this.http.get("/productos");
  }

  public async obtenerProductosConFotos() {
    // Llama al método 'get' del servicio HttpService para obtener productos con fotos
    return await this.http.get("/productos_con_fotos");
  }

  public async obtenerProductoConFotosPorId(idProducto) {
    // Llama al método 'get' del servicio HttpService para obtener un producto con sus fotos por ID
    return await this.http.get("/producto?id=".concat(idProducto));
  }
}
