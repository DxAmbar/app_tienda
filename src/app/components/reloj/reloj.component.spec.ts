import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojComponent } from './reloj.component';

describe('RelojComponent', () => {
  let component: RelojComponent;
  let fixture: ComponentFixture<RelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

  // Prueba que la función mostrarHora maneja el caso donde la variable hora es nula o indefinida.
  it("test_mostrar_hora_handles_null_or_undefined_hora", () => {
    const reloj = new RelojComponent();
    reloj.hora = null;
    reloj.mostrarHora();
    expect(reloj.hora).not.toBeNull();
});