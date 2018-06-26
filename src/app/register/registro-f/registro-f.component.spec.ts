import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFComponent } from './registro-f.component';

describe('RegistroFComponent', () => {
  let component: RegistroFComponent;
  let fixture: ComponentFixture<RegistroFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
