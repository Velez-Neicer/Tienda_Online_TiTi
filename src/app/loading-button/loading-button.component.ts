import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-button', // Selector para usar este componente: <app-loading-button></app-loading-button>
  templateUrl: './loading-button.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./loading-button.component.css'], // Estilos CSS asociados al componente
})
export class LoadingButtonComponent implements OnInit {
  @Input() cargando: boolean; // Propiedad de entrada para indicar si está en proceso de carga
  @Input() texto: string; // Propiedad de entrada para el texto del botón

  constructor() {
    // Constructor del componente
  }

  ngOnInit(): void {
    // Método del ciclo de vida OnInit, se ejecuta cuando el componente se inicializa
  }
}
