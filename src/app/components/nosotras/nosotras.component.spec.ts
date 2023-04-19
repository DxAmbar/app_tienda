import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrasComponent } from './nosotras.component';

describe('NosotrasComponent', () => {
  let component: NosotrasComponent;
  let fixture: ComponentFixture<NosotrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
