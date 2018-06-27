import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialReasonsComponent } from './financial-reasons.component';

describe('FinancialReasonsComponent', () => {
  let component: FinancialReasonsComponent;
  let fixture: ComponentFixture<FinancialReasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialReasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
