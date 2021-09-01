import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltacompradorComponent } from './altacomprador.component';

describe('AltacompradorComponent', () => {
  let component: AltacompradorComponent;
  let fixture: ComponentFixture<AltacompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltacompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltacompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
