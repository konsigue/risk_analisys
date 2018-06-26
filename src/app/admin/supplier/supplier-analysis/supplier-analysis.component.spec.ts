import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAnalysisComponent } from './supplier-analysis.component';

describe('SupplierAnalysisComponent', () => {
  let component: SupplierAnalysisComponent;
  let fixture: ComponentFixture<SupplierAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
