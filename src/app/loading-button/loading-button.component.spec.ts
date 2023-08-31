import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingButtonComponent } from './loading-button.component';

describe('LoadingButtonComponent', () => {
  let component: LoadingButtonComponent;
  let fixture: ComponentFixture<LoadingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingButtonComponent ] // Declarar el componente que se va a probar
    })
    .compileComponents(); // Compilar los componentes y plantillas
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingButtonComponent); // Crear una instancia del componente
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios y actualizar la vista del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar si el componente se ha creado exitosamente
  });
});
