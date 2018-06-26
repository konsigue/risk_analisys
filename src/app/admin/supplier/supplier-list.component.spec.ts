import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListComponent } from './providers.component';

describe('SupplierListComponent', () => {
  let component: SupplierListComponent;
  let fixture: ComponentFixture<SupplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
