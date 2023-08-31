// Importar módulos y clases necesarios
import { Component, OnInit } from '@angular/core';
import { VentasService } from "../ventas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle-de-venta',
  templateUrl: './detalle-de-venta.component.html',
  styleUrls: ['./detalle-de-venta.component.css']
})
export class DetalleDeVentaComponent implements OnInit {

  // Constructor del componente, inyectando el servicio VentasService y ActivatedRoute
  constructor(private ventasService: VentasService, private activatedRoute: ActivatedRoute) {
  }

  // Objeto para almacenar los detalles de la venta
  public venta = {
    total: 0,
    nombre: "",
    direccion: "",
    productos: [],
  };

  // Columnas a mostrar en la tabla de productos
  public columnas = ['nombre', 'precio'];

  // Método para inicializar el componente
  async ngOnInit() {
    // Obtener el ID de la venta desde la ruta
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    
    // Obtener los detalles de la venta usando el servicio VentasService
    this.venta = await this.ventasService.obtenerDetalleDeVenta(id);
  }
}
