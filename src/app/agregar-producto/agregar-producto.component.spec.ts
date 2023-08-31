// Importar módulos y funciones necesarios para las pruebas
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Importar el componente que se está probando
import { AgregarProductoComponent } from './agregar-producto.component';

// Descripción del conjunto de pruebas para el componente AgregarProductoComponent
describe('AgregarProductoComponent', () => {
  let component: AgregarProductoComponent;
  let fixture: ComponentFixture<AgregarProductoComponent>;

  // Configuración previa a las pruebas (se ejecuta antes de cada prueba)
  beforeEach(async(() => {
    // Configurar el módulo de pruebas con el componente AgregarProductoComponent
    TestBed.configureTestingModule({
      declarations: [ AgregarProductoComponent ]
    })
    .compileComponents(); // Compilar componentes y plantillas
  }));

  // Configuración previa a cada prueba individual (se ejecuta antes de cada prueba)
  beforeEach(() => {
    // Crear una instancia del componente en un entorno de pruebas
    fixture = TestBed.createComponent(AgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios iniciales en el componente
  });

  // Prueba para verificar si el componente se crea exitosamente
  it('should create', () => {
    // Esperar que el componente AgregarProductoComponent se haya creado exitosamente
    expect(component).toBeTruthy();
  });
});
