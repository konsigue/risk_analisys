import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisInvoicingComponent } from './analysis-invoicing.component';

describe('AnalysisInvoicingComponent', () => {
  let component: AnalysisInvoicingComponent;
  let fixture: ComponentFixture<AnalysisInvoicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisInvoicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
