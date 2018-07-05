import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisComplianceComponent } from './analysis-compliance.component';

describe('AnalysisComplianceComponent', () => {
  let component: AnalysisComplianceComponent;
  let fixture: ComponentFixture<AnalysisComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
