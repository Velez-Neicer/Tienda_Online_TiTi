import { Component, OnInit } from '@angular/core';
import { CarritoService } from "../carrito.service";
import { DataSharingService } from "../data-sharing.service";
import { Cliente } from "../cliente";

@Component({
  selector: 'app-terminar-compra', // Selector del componente
  templateUrl: './terminar-compra.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./terminar-compra.component.css'] // Estilos CSS asociados al componente
})
export class TerminarCompraComponent implements OnInit {
  // Constructor del componente, inyecta los servicios necesarios
  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
  }

  // Propiedades del componente
  public compraTerminada = false;
  public productos = [];
  public columnas = ['nombre', 'descripcion', 'precio', 'quitar'];
  public clienteModel = new Cliente("", "");

  // Función para revisar y terminar la compra
  public async revisarYTerminar(stepper) {
    if (!this.clienteModel.direccion) {
      return alert("Falta escribir la dirección del cliente");
    }
    if (!this.clienteModel.nombre) {
      return alert("Falta escribir el nombre del cliente");
    }
    const respuestaCompra = await this.carritoService.terminarCompra(this.clienteModel);

    this.compraTerminada = true; // Marca la compra como terminada
    stepper.next(); // Avanza al siguiente paso del stepper
    this.dataSharingService.changeMessage("car_updated"); // Comunicación entre componentes
  }

  // Función para calcular el total de la compra
  public total() {
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }

  // Función para quitar un producto del carrito
  public async quitar(producto) {
    await this.carritoService.quitarProducto(producto.id);
    await this.obtenerProductos();
    this.dataSharingService.changeMessage("car_updated"); // Comunicación entre componentes
  }

  // Función para obtener la lista de productos en el carrito
  public async obtenerProductos() {
    this.productos = await this.carritoService.obtenerProductos();
  }

  // Función para ir al paso 2 (puede estar vacía o tener más funcionalidad)
  public irAPaso2() {
    // ...
  }

  // Método del ciclo de vida OnInit, se ejecuta cuando el componente se inicializa
  async ngOnInit() {
    await this.obtenerProductos();
  }
}
