import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpService) {
    // Inyecta una instancia de HttpService en el constructor del servicio
  }

  public async obtenerVentas() {
    // Llama al método 'get' del servicio HttpService para obtener las ventas
    return await this.http.get("/ventas");
  }

  public async obtenerDetalleDeVenta(idVenta) {
    // Llama al método 'get' del servicio HttpService para obtener los detalles de una venta por su ID
    return await this.http.get("/detalle_venta?id=".concat(idVenta));
  }
}
