// Importar módulos y clases necesarios
import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";
import { ActivatedRoute } from "@angular/router";
import { CarritoService } from "../carrito.service";
import { DataSharingService } from "../data-sharing.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {
  public producto = {
    id: 0,
    fotos: [],
    nombre: "",
    descripcion: "",
    precio: "",
  };
  public fotoSeleccionada: string;
  public indiceSeleccionado = 0;
  public yaExiste: boolean;

  // Constructor del componente, inyectando servicios y dependencias
  constructor(
    private carritoService: CarritoService,
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService
  ) {}

  // Método para resolver la URL de una foto
  public resolverFoto(foto) {
    const baseUrl = environment.baseUrl;
    return `${baseUrl}/foto_producto/${foto}`;
  }

  // Método para seleccionar una imagen
  public seleccionarImagen(indice) {
    this.indiceSeleccionado = indice;
    this.fotoSeleccionada = this.producto.fotos[this.indiceSeleccionado].foto;
  }

  // Método para quitar el producto del carrito
  public async quitarDelCarrito() {
    const { id } = this.producto;
    const respuesta = await this.carritoService.quitarProducto(id);
    console.log({ respuesta });
    this.refrescarEstado();
  }

  // Método para agregar el producto al carrito
  public async agregarAlCarrito() {
    const { id } = this.producto;
    const respuesta = await this.carritoService.agregarAlCarrito(id);
    console.log({ respuesta });
    this.refrescarEstado();
  }

  // Método para actualizar el estado del carrito
  async refrescarEstado() {
    const id = this.producto.id;
    this.yaExiste = await this.carritoService.existeEnCarrito(id);
    // Comunicación entre componentes
    this.dataSharingService.changeMessage("car_updated");
  }

  // Método de inicialización del componente
  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.producto = await this.productosService.obtenerProductoConFotosPorId(id);
    if (this.producto.fotos.length >= 0) {
      this.seleccionarImagen(0);
    }
    this.refrescarEstado();
  }
}
