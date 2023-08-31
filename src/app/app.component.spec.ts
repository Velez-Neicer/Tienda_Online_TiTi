import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importar módulo de pruebas de enrutamiento
import { AppComponent } from './app.component';

describe('AppComponent', () => { // Definir una suite de pruebas para el AppComponent
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // Configurar el módulo de pruebas de enrutamiento
      ],
      declarations: [
        AppComponent // Declarar el componente que se está probando
      ],
    }).compileComponents();
  }));

  it('should create the app', () => { // Prueba: Verificar si se crea correctamente el componente
    const fixture = TestBed.createComponent(AppComponent); // Crear una instancia del componente
    const app = fixture.componentInstance; // Obtener la instancia del componente
    expect(app).toBeTruthy(); // Verificar si el componente se creó correctamente
  });

  it(`should have as title 'e-commerce-angular-node'`, () => { // Prueba: Verificar si la propiedad 'title' tiene el valor correcto
    const fixture = TestBed.createComponent(AppComponent); // Crear una instancia del componente
    const app = fixture.componentInstance; // Obtener la instancia del componente
    expect(app.title).toEqual('e-commerce-angular-node'); // Verificar si la propiedad 'title' tiene el valor esperado
  });

  it('should render title', () => { // Prueba: Verificar si el título se renderiza correctamente
    const fixture = TestBed.createComponent(AppComponent); // Crear una instancia del componente
    fixture.detectChanges(); // Detectar cambios en el componente
    const compiled = fixture.nativeElement; // Obtener el DOM del componente
    // Verificar si el contenido del elemento <span> coincide con el texto esperado
    expect(compiled.querySelector('.content span').textContent).toContain('e-commerce-angular-node app is running!');
  });
});
