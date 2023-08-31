import { TestBed } from '@angular/core/testing';
import { DataSharingService } from './data-sharing.service';

describe('DataSharingService', () => { // Definir una suite de pruebas para el servicio DataSharingService
  let service: DataSharingService; // Variable para acceder al servicio

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configurar el entorno de pruebas
    service = TestBed.inject(DataSharingService); // Obtener una instancia del servicio
  });

  it('should be created', () => { // Prueba: Verificar si el servicio se crea correctamente
    expect(service).toBeTruthy(); // Verificar si el servicio se creó correctamente
  });
});
