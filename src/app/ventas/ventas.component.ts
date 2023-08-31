import { Component, OnInit } from '@angular/core';
import { VentasService } from "../ventas.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ventas', // Selector del componente
  templateUrl: './ventas.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./ventas.component.css'] // Estilos CSS asociados al componente
})
export class VentasComponent implements OnInit {
  constructor(private ventasService: VentasService, private router: Router) {
  }

  public ventas = []; // Arreglo para almacenar las ventas
  public columnas = ['cliente', 'direccion', 'total', 'detalles']; // Nombres de columnas

  // Método del ciclo de vida OnInit, se ejecuta cuando el componente se inicializa
  async ngOnInit() {
    this.ventas = await this.ventasService.obtenerVentas(); // Carga la lista de ventas utilizando el servicio VentasService
    console.log(this.ventas); // Muestra las ventas en la consola
  }

  // Método para ver los detalles de una venta
  public verDetalle(id) {
    console.log({ id }); // Muestra el ID de la venta en la consola
    this.router.navigate(["/detalle-venta", id]); // Navega a la ruta de los detalles de la venta
  }
}
