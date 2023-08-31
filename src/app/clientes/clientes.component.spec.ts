// Importar módulos y clases necesarios para las pruebas
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Importar el componente que se está probando
import { ClientesComponent } from './clientes.component';

// Descripción del conjunto de pruebas para el componente ClientesComponent
describe('ClientesComponent', () => {
  let component: ClientesComponent;
  let fixture: ComponentFixture<ClientesComponent>;

  // Configuración previa a las pruebas (se ejecuta antes de cada prueba)
  beforeEach(async(() => {
    // Configurar el módulo de pruebas con el componente ClientesComponent
    TestBed.configureTestingModule({
      declarations: [ ClientesComponent ]
    })
    .compileComponents(); // Compilar componentes y plantillas
  }));

  // Configuración previa a cada prueba individual (se ejecuta antes de cada prueba)
  beforeEach(() => {
    // Crear una instancia del componente en un entorno de pruebas
    fixture = TestBed.createComponent(ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios iniciales en el componente
  });

  // Prueba para verificar si el componente se crea exitosamente
  it('should create', () => {
    // Esperar que el componente ClientesComponent se haya creado exitosamente
    expect(component).toBeTruthy();
  });
});
