import { TestBed } from '@angular/core/testing';

// Importa el servicio VentasService desde './ventas.service'
import { VentasService } from './ventas.service';

describe('VentasService', () => {
  let service: VentasService;

  beforeEach(() => {
    // Configura el entorno de pruebas utilizando TestBed.configureTestingModule
    TestBed.configureTestingModule({});

    // Inyecta una instancia de VentasService en la variable 'service'
    service = TestBed.inject(VentasService);
  });

  it('should be created', () => {
    // Asegúrate de que la variable 'service' sea truthy (no nula ni undefined)
    expect(service).toBeTruthy();
  });
});
