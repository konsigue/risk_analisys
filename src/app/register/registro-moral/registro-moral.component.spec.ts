import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMoralComponent } from './registro-moral.component';

describe('RegistroMoralComponent', () => {
  let component: RegistroMoralComponent;
  let fixture: ComponentFixture<RegistroMoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
