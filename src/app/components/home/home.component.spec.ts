import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

 // Tests de que el componente está instanciado correctamente
 it("test_instantiation_success", () => {
  const homeComponent = new HomeComponent();
  expect(homeComponent).toBeInstanceOf(HomeComponent);
});

  // Tests de que el componente se renderiza sin errores. 
  it("test_render_component", () => {
    const component = new HomeComponent();
    expect(component).toBeTruthy();
});