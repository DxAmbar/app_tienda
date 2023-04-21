import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app_tienda'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app_tienda');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('app_tienda app is running!');
  });
});

// Comprueba que la propiedad del título se puede actualizar correctamente. 
it("test_title_updated_successfully", () => {
  const app = new AppComponent();
  app.title = 'new_title';
  expect(app.title).toEqual('new_title');
});

// Comprueba que el tipo de propiedad del título es un String
it("test_title_type", () => {
  const app = new AppComponent();
  expect(typeof app.title).toEqual('string');
});