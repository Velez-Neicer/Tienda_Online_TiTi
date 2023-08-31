import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TiendaComponent } from './tienda.component';

describe('TiendaComponent', () => {
  let component: TiendaComponent;
  let fixture: ComponentFixture<TiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaComponent ] // Declarar el componente que se va a probar
    })
    .compileComponents(); // Compilar los componentes y plantillas
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaComponent); // Crear una instancia del componente
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios y actualizar la vista del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar si el componente se ha creado exitosamente
  });
});
