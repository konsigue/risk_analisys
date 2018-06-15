import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRepresentanteRmComponent } from './datos-representante-rm.component';

describe('DatosRepresentanteRmComponent', () => {
  let component: DatosRepresentanteRmComponent;
  let fixture: ComponentFixture<DatosRepresentanteRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosRepresentanteRmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosRepresentanteRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
