import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentahistoricosComponent } from './ventahistoricos.component';

describe('VentahistoricosComponent', () => {
  let component: VentahistoricosComponent;
  let fixture: ComponentFixture<VentahistoricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentahistoricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentahistoricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
