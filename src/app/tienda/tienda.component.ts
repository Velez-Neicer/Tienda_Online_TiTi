import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";

@Component({
  selector: 'app-tienda', // Selector del componente
  templateUrl: './tienda.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./tienda.component.css'] // Estilos CSS asociados al componente
})
export class TiendaComponent implements OnInit {
  public productos = []; // Arreglo para almacenar los productos

  // Constructor del componente, inyecta el servicio ProductosService
  constructor(private productosService: ProductosService) {
  }

  // Método del ciclo de vida OnInit, se ejecuta cuando el componente se inicializa
  async ngOnInit() {
    this.productos = await this.productosService.obtenerProductosConFotos();
    // Carga la lista de productos con fotos utilizando el servicio ProductosService
  }
}
