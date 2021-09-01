import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformetipomascotaComponent } from './informetipomascota.component';

describe('InformetipomascotaComponent', () => {
  let component: InformetipomascotaComponent;
  let fixture: ComponentFixture<InformetipomascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformetipomascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformetipomascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
