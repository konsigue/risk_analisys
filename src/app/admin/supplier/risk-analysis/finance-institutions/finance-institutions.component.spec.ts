import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceInstitutionsComponent } from './finance-institutions.component';

describe('FinanceInstitutionsComponent', () => {
  let component: FinanceInstitutionsComponent;
  let fixture: ComponentFixture<FinanceInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceInstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
