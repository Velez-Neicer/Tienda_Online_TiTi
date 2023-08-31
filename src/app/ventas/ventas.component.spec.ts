import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VentasComponent } from './ventas.component';

describe('VentasComponent', () => {
  let component: VentasComponent;
  let fixture: ComponentFixture<VentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasComponent ] // Declarar el componente que se va a probar
    })
    .compileComponents(); // Compilar los componentes y plantillas
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasComponent); // Crear una instancia del componente
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios y actualizar la vista del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar si el componente se ha creado exitosamente
  });
});
