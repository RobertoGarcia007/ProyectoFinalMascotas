import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonavalidacionadminComponent } from './zonavalidacionadmin.component';

describe('ZonavalidacionadminComponent', () => {
  let component: ZonavalidacionadminComponent;
  let fixture: ComponentFixture<ZonavalidacionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonavalidacionadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonavalidacionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
