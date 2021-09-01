import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentamascotasComponent } from './ventamascotas.component';

describe('VentamascotasComponent', () => {
  let component: VentamascotasComponent;
  let fixture: ComponentFixture<VentamascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentamascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentamascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
