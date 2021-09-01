import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmascotasComponent } from './listarmascotas.component';

describe('ListarmascotasComponent', () => {
  let component: ListarmascotasComponent;
  let fixture: ComponentFixture<ListarmascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarmascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
