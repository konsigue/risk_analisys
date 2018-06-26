import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFisicoComponent } from './registro-fisico.component';

describe('RegistroFisicoComponent', () => {
  let component: RegistroFisicoComponent;
  let fixture: ComponentFixture<RegistroFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
