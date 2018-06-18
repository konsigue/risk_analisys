import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsFinancialStateComponent } from './documents-financial-state.component';

describe('DocumentsFinancialStateComponent', () => {
  let component: DocumentsFinancialStateComponent;
  let fixture: ComponentFixture<DocumentsFinancialStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsFinancialStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsFinancialStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
