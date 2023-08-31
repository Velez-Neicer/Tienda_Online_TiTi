// Importar módulos y clases necesarios para las pruebas
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Importar el componente que se está probando
import { DetalleDeVentaComponent } from './detalle-de-venta.component';

// Descripción del conjunto de pruebas para el componente DetalleDeVentaComponent
describe('DetalleDeVentaComponent', () => {
  let component: DetalleDeVentaComponent;
  let fixture: ComponentFixture<DetalleDeVentaComponent>;

  // Configuración previa a las pruebas (se ejecuta antes de cada prueba)
  beforeEach(async(() => {
    // Configurar el módulo de pruebas con el componente DetalleDeVentaComponent
    TestBed.configureTestingModule({
      declarations: [ DetalleDeVentaComponent ]
    })
    .compileComponents(); // Compilar componentes y plantillas
  }));

  // Configuración previa a cada prueba individual (se ejecuta antes de cada prueba)
  beforeEach(() => {
    // Crear una instancia del componente en un entorno de pruebas
    fixture = TestBed.createComponent(DetalleDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios iniciales en el componente
  });

  // Prueba para verificar si el componente se crea exitosamente
  it('should create', () => {
    // Esperar que el componente DetalleDeVentaComponent se haya creado exitosamente
    expect(component).toBeTruthy();
  });
});
