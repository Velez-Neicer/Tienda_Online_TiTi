import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaProductoComponent } from './tarjeta-producto.component';

describe('TarjetaProductoComponent', () => {
  let component: TarjetaProductoComponent;
  let fixture: ComponentFixture<TarjetaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaProductoComponent ] // Declarar el componente que se va a probar
    })
    .compileComponents(); // Compilar los componentes y plantillas
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProductoComponent); // Crear una instancia del componente
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios y actualizar la vista del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar si el componente se ha creado exitosamente
  });
});
