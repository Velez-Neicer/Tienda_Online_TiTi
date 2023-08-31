import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductosService } from "../productos.service"; // Importar el servicio de productos

@Component({
  selector: 'app-productos', // Selector del componente
  templateUrl: './productos.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./productos.component.css'] // Estilos CSS asociados al componente
})
export class ProductosComponent implements OnInit {

  public productos = []; // Arreglo para almacenar los productos
  public columnas = ['nombre', 'descripcion', 'precio', 'eliminar']; // Columnas de la tabla

  constructor(private router: Router, private productosService: ProductosService) {
    // Constructor del componente, inyecta el enrutador y el servicio de productos
  }

  async eliminar(producto) {
    // Función para eliminar un producto
    if (!confirm("¿Realmente lo quieres eliminar?")) {
      return; // Si el usuario no confirma, se detiene la eliminación
    }
    await this.productosService.eliminarProducto(producto.id); // Llama al servicio para eliminar el producto
    await this.obtenerProductos(); // Actualiza la lista de productos
  }

  async ngOnInit() {
    // Método del ciclo de vida OnInit, se ejecuta cuando el componente se inicializa
    await this.obtenerProductos(); // Obtiene y muestra la lista de productos
  }

  async obtenerProductos() {
    // Función para obtener la lista de productos
    this.productos = await this.productosService.obtenerProductos(); // Llama al servicio para obtener los productos
  }

  navegarAFormulario() {
    // Función para navegar al formulario de agregar productos
    this.router.navigateByUrl("/productos/agregar"); // Redirige a la ruta del formulario
  }
}
