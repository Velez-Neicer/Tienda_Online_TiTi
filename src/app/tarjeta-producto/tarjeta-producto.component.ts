import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"; // Importar el entorno

@Component({
  selector: 'app-tarjeta-producto', // Selector del componente
  templateUrl: './tarjeta-producto.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./tarjeta-producto.component.css'] // Estilos CSS asociados al componente
})
export class TarjetaProductoComponent implements OnInit {
  @Input() producto: any; // Propiedad de entrada para el producto

  constructor(private router: Router) {
    // Constructor del componente, inyecta el enrutador
  }

  ngOnInit(): void {
    // Método del ciclo de vida OnInit, se ejecuta cuando el componente se inicializa
  }

  public resolverRuta() {
    // Función para resolver la ruta de la imagen del producto
    const baseUrl = environment.baseUrl; // Obtiene la URL base del entorno
    return `${baseUrl}/foto_producto/${this.producto.foto}`; // Construye la ruta completa de la imagen
  }

  public detalles() {
    // Función para navegar a la página de detalles del producto
    this.router.navigate(["/producto/detalle", this.producto.id]); // Redirige a la ruta de detalles con el ID del producto
  }
}
