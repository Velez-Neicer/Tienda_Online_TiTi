import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminarCompraComponent } from './terminar-compra.component';

describe('TerminarCompraComponent', () => {
  let component: TerminarCompraComponent;
  let fixture: ComponentFixture<TerminarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminarCompraComponent ] // Declarar el componente que se va a probar
    })
    .compileComponents(); // Compilar los componentes y plantillas
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarCompraComponent); // Crear una instancia del componente
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios y actualizar la vista del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar si el componente se ha creado exitosamente
  });
});
