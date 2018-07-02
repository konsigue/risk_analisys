import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisFinancialStatusComponent } from './analysis-financial-status.component';

describe('AnalysisFinancialStatusComponent', () => {
  let component: AnalysisFinancialStatusComponent;
  let fixture: ComponentFixture<AnalysisFinancialStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisFinancialStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFinancialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
