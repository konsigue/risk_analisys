import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAccionistasComponent } from './registro-accionistas.component';

describe('RegistroAccionistasComponent', () => {
  let component: RegistroAccionistasComponent;
  let fixture: ComponentFixture<RegistroAccionistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAccionistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAccionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
