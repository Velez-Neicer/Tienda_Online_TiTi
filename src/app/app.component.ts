import { Component, OnInit } from '@angular/core';
import { CarritoService } from './carrito.service';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular-node'; // Título del componente
  public productos = []; // Lista de productos en el carrito

  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
    // Suscripción a cambios en la comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje === 'car_updated') {
        this.refrescarCarrito(); // Actualizar el carrito cuando reciba la notificación 'car_updated'
      }
    });
  }

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos(); // Actualizar la lista de productos en el carrito
  }

  public total() {
    // Calcular el total de los precios de los productos en el carrito
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito(); // Al inicializar el componente, actualizar la lista de productos en el carrito
  }
}
