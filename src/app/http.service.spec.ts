import { TestBed } from '@angular/core/testing';

// Importa la clase HttpService desde el archivo http.service.ts
import { HttpService } from './http.service';

// Describe el conjunto de pruebas para la clase HttpService
describe('HttpService', () => {
  // Declara una variable 'service' para contener la instancia de HttpService
  let service: HttpService;

  // Antes de cada prueba, configura el entorno de prueba
  beforeEach(() => {
    // Configura el entorno de prueba utilizando TestBed.configureTestingModule
    TestBed.configureTestingModule({});

    // Inyecta una instancia de HttpService en la variable 'service'
    service = TestBed.inject(HttpService);
  });

  // Define una prueba: debe asegurarse de que la instancia de HttpService se haya creado
  it('should be created', () => {
    // Verifica que la variable 'service' sea truthy (no nula ni undefined)
    expect(service).toBeTruthy();
  });
});
