import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSuppliersComponent } from './documents-suppliers.component';

describe('DocumentsSuppliersComponent', () => {
  let component: DocumentsSuppliersComponent;
  let fixture: ComponentFixture<DocumentsSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
