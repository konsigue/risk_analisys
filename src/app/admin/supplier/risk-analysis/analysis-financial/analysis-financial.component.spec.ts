import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisFinancialComponent } from './analysis-financial.component';

describe('AnalysisFinancialComponent', () => {
  let component: AnalysisFinancialComponent;
  let fixture: ComponentFixture<AnalysisFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisFinancialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
