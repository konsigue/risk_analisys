import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativenessComponent } from './operativeness.component';

describe('OperativenessComponent', () => {
  let component: OperativenessComponent;
  let fixture: ComponentFixture<OperativenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
