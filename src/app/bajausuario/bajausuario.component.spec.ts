import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajausuarioComponent } from './bajausuario.component';

describe('BajausuarioComponent', () => {
  let component: BajausuarioComponent;
  let fixture: ComponentFixture<BajausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
