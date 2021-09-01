import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoventasComponent } from './historicoventas.component';

describe('HistoricoventasComponent', () => {
  let component: HistoricoventasComponent;
  let fixture: ComponentFixture<HistoricoventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoventasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
