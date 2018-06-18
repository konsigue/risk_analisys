import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialRatiosComponent } from './financial-ratios.component';

describe('FinancialRatiosComponent', () => {
  let component: FinancialRatiosComponent;
  let fixture: ComponentFixture<FinancialRatiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialRatiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialRatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
