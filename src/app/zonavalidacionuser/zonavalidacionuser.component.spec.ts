import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonavalidacionuserComponent } from './zonavalidacionuser.component';

describe('ZonavalidacionuserComponent', () => {
  let component: ZonavalidacionuserComponent;
  let fixture: ComponentFixture<ZonavalidacionuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonavalidacionuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonavalidacionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
